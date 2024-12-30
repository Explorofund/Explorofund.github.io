new Vue({
    el: '#app',
    data: {
      profile: {
        name: '睡觉教传教士',
        avatar: 'images/headportrait.jpg',
        bilibili: 'https://space.bilibili.com/3494359274096812',
      },
      games: [
        {
          id: 1,
          title: '憋睡大物——2024吉比特高校gamejam挑战赛陪跑作品',
          description: '把上课睡觉做成游戏！躲避老师讲的无趣内容以控制脑袋平衡的游戏。',
          image: 'images/sleepy.png',
          downloadLink: '',  // 暂时没有下载链接
          bilibiliLink: 'https://www.bilibili.com/video/BV1nHzmYrEMZ/',
        },
        {
          id: 2,
          title: '南京备忘录——用于纪念南京大屠杀',
          description: '结合了GalGame和像素2dRPG。',
          image: 'images/nanjing.png',
          downloadLink: '',  // 暂时没有下载链接
          bilibiliLink: 'https://www.bilibili.com/video/BV1yvBMYvEUY/',
        },
        {
          id: 3,
          title: '俄罗斯方块',
          description: '真的只是俄罗斯方块而已啦',
          image: 'images/TETRIS.png',
          downloadLink: '',  // 暂时没有下载链接
          bilibiliLink: '',  // 暂时没有B站链接
        }
      ]
    },
    methods: {
      // 下载游戏方法
      downloadGame(link) {
        if (!link) {
          alert("下载链接暂不可用");
        } else {
          window.location.href = link;
        }
      },
      // 打开B站链接
      openBilibili(link) {
        if (!link) {
          alert("B站链接暂不可用");
        } else {
          window.open(link, '_blank');
        }
      }
    }
  });
  