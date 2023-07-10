import Background from "./background.js";
import Platform from "./platform.js";
import Player from "./player.js";
import Enemy from "./enemy.js";
import * as Util from "./util.js";

class Game {
  constructor(canvas, difficulty) {
    this.screenWidth = canvas.width;
    this.screenHeight = canvas.height;
    this.difficulty = difficulty;
    this.isGameEnd = false;
    this.gameStop = false;
    this.backgrounds = [];
    this.enemies = [];
    this.projectiles = [];
    this.platforms = [];
    this.scrollOffset = 0;
    this.killCount = 0;
    this.score = 0;
    this.player = this.addPlayer();
    this.createBackgrounds();
    this.createPlatforms();
    this.createEnemies();
    this.shootSFX = document.createElement("audio");
    this.shootSFX.src = "src/assets/sounds/weapon-shot.wav";
  }

  addPlayer() {
    const player = new Player({ game: this, pos: [100, 444] });
    return player;
  }

  createBackgrounds() {
    const bgArgs = {
      img: Util.loadSprite("src/assets/images/background/background0.png"),
      pos: [0, 0],
      width: 10000,
      height: 600,
      layer: 0,
    };
    const bg = new Background(bgArgs);
    this.backgrounds.push(bg);

    const bg1Arg = {
      img: Util.loadSprite("src/assets/images/background/background1.png"),
      width: 576,
      height: 324,
      layer: 1,
    };
    const bg2Arg = {
      img: Util.loadSprite("src/assets/images/background/background2.png"),
      width: 576,
      height: 324,
      layer: 2,
    };
    const bg3Arg = {
      img: Util.loadSprite("src/assets/images/background/background3.png"),
      width: 576,
      height: 324,
      layer: 3,
    };

    Util.BG_1_POS.forEach((pos) => {
      bg1Arg.pos = pos.slice();
      const bg1 = new Background(bg1Arg);
      this.backgrounds.push(bg1);
    });

    Util.BG_2_POS.forEach((pos) => {
      bg2Arg.pos = pos.slice();
      const bg2 = new Background(bg2Arg);
      this.backgrounds.push(bg2);
    });

    Util.BG_3_POS.forEach((pos) => {
      bg3Arg.pos = pos.slice();
      const bg3 = new Background(bg3Arg);
      this.backgrounds.push(bg3);
    });
  }

  createFloor(img, width, height) {
    let x = -500;
    const y = this.screenHeight - 80;
    while (x < 11000) {
      const pos = [x, y];
      const args = {
        img: img,
        pos: pos,
        width: width,
        height: height,
        type: "floor",
      };
      const floor = new Platform(args);
      this.platforms.push(floor);
      x += width;
    }
  }

  createPlatforms() {
    const floor = Util.loadSprite("src/assets/images/sprites/floor_tile.png");
    const width = 500;
    const height = 80;
    this.createFloor(floor, width, height);

    const plat = Util.loadSprite(
      "src/assets/images/sprites/platform_1_224_31.png"
    );

    Util.PLATFORMS_POS.forEach((pos) => {
      const args = {
        img: plat,
        pos: pos.slice(),
        width: 224,
        height: 31,
      };
      const platform = new Platform(args);
      this.platforms.push(platform);
    });
  }

  createEnemies() {
    Util.ENEMY_POS.forEach((pos) => {
      const args = {
        pos: pos.slice(),
        game: this,
      };
      const enemy = new Enemy(args, this.difficulty);
      this.enemies.push(enemy);
    });
  }

  addEnemy() {
    if (this.enemies.length <= 5) {
      const playerX = this.player.pos[0];
      const mid = this.screenWidth / 2;
      let x1, x2;
      if (playerX + this.player.dWidth < mid + 50) {
        x1 = mid + 150;
        x2 = mid + 300;
      } else {
        x1 = mid - 300;
        x2 = mid - 150;
      }
      const randPos = Util.randEnemyPos(x1, x2);
      const args = {
        pos: randPos,
        game: this,
      };
      const enemy = new Enemy(args, this.difficulty);
      this.enemies.push(enemy);
    }
  }

  Scroll(dir, delta) {
    // dir = player moving direction
    //everything should move the opposite direction of player movement
    let spd = 0;

    switch (dir) {
      case "left":
        spd = this.player.speed;
        break;
      case "right":
        spd = -this.player.speed;
        break;
    }

    const velocityScale = delta / (1000 / 60);
    spd *= velocityScale;
    this.backgrounds.forEach((background) => {
      switch (background.layer) {
        case 0:
          background.pos[0] += spd * 0.66;
          break;
        case 1:
          background.pos[0] += spd * 0.77;
          break;
        case 2:
          background.pos[0] += spd * 0.85;
          break;
        case 3:
          background.pos[0] += spd * 0.94;
          break;
      }
    });

    this.platforms.forEach((platform) => {
      platform.pos[0] += spd;
    });

    this.enemies.forEach((enemy) => {
      enemy.pos[0] += spd;
    });
    this.projectiles.forEach((prj) => {
      prj.pos[0] += spd;
    });
  }

  allMovingObjects() {
    let allObj = this.enemies.concat(this.projectiles);
    if (this.player) {
      allObj = allObj.concat([this.player]);
    }
    return allObj;
  }

  step(delta) {
    if (!this.isGameEnd) {
      this.addEnemy();
      this.updateAllMovingUpjects(delta);
      this.checkCollision();
    }
    this.checkOnPlatform();
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
    this.drawBackground(ctx);
    this.drawPlatforms(ctx);
    this.drawAllMovingObjects(ctx);
  }

  drawAllMovingObjects(ctx) {
    this.allMovingObjects().forEach((obj) => {
      if (
        this.isGameEnd &&
        !!this.player &&
        obj === this.player &&
        obj.health === 0
      ) {
        this.player.drawDespawn(ctx);
      } else {
        obj.draw(ctx);
      }
    });
  }

  drawPlatforms(ctx) {
    this.platforms.forEach((platform) => {
      platform.draw(ctx);
    });
  }

  drawBackground(ctx) {
    this.backgrounds.forEach((background) => {
      background.draw(ctx);
    });
  }

  updateAllMovingUpjects(delta) {
    this.allMovingObjects().forEach((obj) => {
      obj.update(delta);
    });
  }

  checkOnPlatform() {
    this.platforms.forEach((platform) => {
      this.allMovingObjects().forEach((obj) => {
        if (Util.isOnPlatform(obj, platform)) {
          obj.inJump = false;
          obj.vel[1] = 0;
        }
      });
    });
  }

  checkCollision() {
    this.checkProjectileCollision();
    this.checkObjCollision();
  }

  checkProjectileCollision() {
    this.projectiles.forEach((prj) => {
      this.enemies.concat([this.player]).forEach((obj) => {
        if (Util.projectileCollison(prj, obj)) {
          if (!obj.isHurt) {
            obj.health--;
            obj.isHurt = true;
            // obj.hurtBasetime = Date.now();
            obj.hurtBasetime = performance.now();
          }
          prj.health--;
        }
      });
    });
  }

  checkObjCollision() {
    const entities = this.enemies.concat([this.player]);
    entities.forEach((obj1) => {
      entities.forEach((obj2) => {
        if (obj1 !== obj2 && Util.rectCollision(obj1, obj2)) {
          if (obj1.type === "player" && !obj1.isHurt) {
            obj1.health--;
            obj1.isHurt = true;
            // obj1.hurtBasetime = Date.now();
            obj1.hurtBasetime = performance.now();
            obj2.vel[0] = 0;
          } else if (obj2.type === "player" && !obj2.isHurt) {
            obj2.health--;
            obj2.isHurt = true;
            // obj1.hurtBasetime = Date.now();
            obj1.hurtBasetime = performance.now();

            obj1.vel[0] = 0;
          }
        }
      });
    });
  }

  checkGameEnd() {
    // if (this.player.health === 0 || this.killCount >= 3) this.isGameEnd = true;
    if (this.player.health === 0) {
      this.isGameEnd = true;
      Util.switchSprite(this.player, this.player.despawn);
      window.setTimeout(() => {
        // this.gameStop = true;
        this.player.remove();
      }, 1500);
    }
  }

  remove(obj) {
    if (obj.type === "projectile") {
      this.projectiles.splice(this.projectiles.indexOf(obj), 1);
    } else if (obj.type === "enemy") {
      this.handleEnemyKill();
      this.enemies.splice(this.enemies.indexOf(obj), 1);
      // if (this.enemies.length === 0) this.isGameEnd = true;
    } else if (obj.type === "player") {
      delete this.player;
      setTimeout(() => {
        this.gameStop = true;
      }, 250);
    }
  }

  handleEnemyKill() {
    this.killCount += 1;
    const killScore = 1000 * this.difficulty;
    const bonusKillScore = 500 * this.difficulty;
    const hpOnKillCount = 4 - this.difficulty;
    this.score += killScore;
    if (this.killCount % hpOnKillCount === 0 && this.player.health < 20) {
      this.player.health += 1;
      this.score += bonusKillScore;
    }
  }

  reset(difficulty, ctx) {
    ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
    this.isGameEnd = false;
    this.gameStop = false;
    this.difficulty = difficulty;
    this.backgrounds = [];
    this.enemies = [];
    this.platforms = [];
    this.projectiles = [];
    this.scrollOffset = 0;
    this.killCount = 0;
    this.score = 0;
    this.player = this.addPlayer();
    this.createBackgrounds();
    this.createPlatforms();
    this.createEnemies();
  }
}

export default Game;
