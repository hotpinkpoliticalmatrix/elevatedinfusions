import React from "react"
import renderer from "react-test-renderer"
import ImgGallery from "../../components/imgGallery"
import { StaticQuery } from "gatsby"

describe("imgGallery", () =>
  it("renders correctly", () => {
    const products = [
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.4733333333333334,
              src:
                "/static/d0f68beb575838e92ff05a7f2c9f23e5/2175c/cupcake1.jpg",
              srcSet:
                "/static/d0f68beb575838e92ff05a7f2c9f23e5/47efb/cupcake1.jpg 221w,\n/static/d0f68beb575838e92ff05a7f2c9f23e5/1e170/cupcake1.jpg 442w,\n/static/d0f68beb575838e92ff05a7f2c9f23e5/2175c/cupcake1.jpg 884w,\n/static/d0f68beb575838e92ff05a7f2c9f23e5/cd84f/cupcake1.jpg 1326w,\n/static/d0f68beb575838e92ff05a7f2c9f23e5/57494/cupcake1.jpg 1768w,\n/static/d0f68beb575838e92ff05a7f2c9f23e5/09356/cupcake1.jpg 4032w",
              srcWebp:
                "/static/d0f68beb575838e92ff05a7f2c9f23e5/e1d9e/cupcake1.webp",
              srcSetWebp:
                "/static/d0f68beb575838e92ff05a7f2c9f23e5/bc2d6/cupcake1.webp 221w,\n/static/d0f68beb575838e92ff05a7f2c9f23e5/824f7/cupcake1.webp 442w,\n/static/d0f68beb575838e92ff05a7f2c9f23e5/e1d9e/cupcake1.webp 884w,\n/static/d0f68beb575838e92ff05a7f2c9f23e5/6dfb2/cupcake1.webp 1326w,\n/static/d0f68beb575838e92ff05a7f2c9f23e5/5263a/cupcake1.webp 1768w,\n/static/d0f68beb575838e92ff05a7f2c9f23e5/bdde8/cupcake1.webp 4032w",
              sizes: "(max-width: 884px) 100vw, 884px",
            },
          },
        },
        name: "Cupcakes",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 0.9266666666666666,
              src:
                "/static/0a85d4b32ad20147eaf7a89f9188eb0f/117a6/cupcake2.png",
              srcSet:
                "/static/0a85d4b32ad20147eaf7a89f9188eb0f/ea52d/cupcake2.png 139w,\n/static/0a85d4b32ad20147eaf7a89f9188eb0f/7a833/cupcake2.png 278w,\n/static/0a85d4b32ad20147eaf7a89f9188eb0f/117a6/cupcake2.png 556w,\n/static/0a85d4b32ad20147eaf7a89f9188eb0f/c4738/cupcake2.png 834w,\n/static/0a85d4b32ad20147eaf7a89f9188eb0f/1aa1d/cupcake2.png 1112w,\n/static/0a85d4b32ad20147eaf7a89f9188eb0f/ad31e/cupcake2.png 1116w",
              srcWebp:
                "/static/0a85d4b32ad20147eaf7a89f9188eb0f/e1d9e/cupcake2.webp",
              srcSetWebp:
                "/static/0a85d4b32ad20147eaf7a89f9188eb0f/bc2d6/cupcake2.webp 139w,\n/static/0a85d4b32ad20147eaf7a89f9188eb0f/824f7/cupcake2.webp 278w,\n/static/0a85d4b32ad20147eaf7a89f9188eb0f/e1d9e/cupcake2.webp 556w,\n/static/0a85d4b32ad20147eaf7a89f9188eb0f/6dfb2/cupcake2.webp 834w,\n/static/0a85d4b32ad20147eaf7a89f9188eb0f/5263a/cupcake2.webp 1112w,\n/static/0a85d4b32ad20147eaf7a89f9188eb0f/eb3a1/cupcake2.webp 1116w",
              sizes: "(max-width: 556px) 100vw, 556px",
            },
          },
        },
        name: "Cupcakes",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.2,
              src:
                "/static/8882f25fbadb04f8b550b73915bf2202/2175c/cupcake3.jpg",
              srcSet:
                "/static/8882f25fbadb04f8b550b73915bf2202/47efb/cupcake3.jpg 180w,\n/static/8882f25fbadb04f8b550b73915bf2202/1e170/cupcake3.jpg 359w,\n/static/8882f25fbadb04f8b550b73915bf2202/2175c/cupcake3.jpg 718w,\n/static/8882f25fbadb04f8b550b73915bf2202/cd84f/cupcake3.jpg 1078w,\n/static/8882f25fbadb04f8b550b73915bf2202/57494/cupcake3.jpg 1437w,\n/static/8882f25fbadb04f8b550b73915bf2202/cb38f/cupcake3.jpg 3621w",
              srcWebp:
                "/static/8882f25fbadb04f8b550b73915bf2202/e1d9e/cupcake3.webp",
              srcSetWebp:
                "/static/8882f25fbadb04f8b550b73915bf2202/bc2d6/cupcake3.webp 180w,\n/static/8882f25fbadb04f8b550b73915bf2202/824f7/cupcake3.webp 359w,\n/static/8882f25fbadb04f8b550b73915bf2202/e1d9e/cupcake3.webp 718w,\n/static/8882f25fbadb04f8b550b73915bf2202/6dfb2/cupcake3.webp 1078w,\n/static/8882f25fbadb04f8b550b73915bf2202/5263a/cupcake3.webp 1437w,\n/static/8882f25fbadb04f8b550b73915bf2202/3c611/cupcake3.webp 3621w",
              sizes: "(max-width: 718px) 100vw, 718px",
            },
          },
        },
        name: "Cupcakes",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.34,
              src:
                "/static/1c8313d2a257abe8b6bbb97a743ac9ab/2175c/cupcake4.jpg",
              srcSet:
                "/static/1c8313d2a257abe8b6bbb97a743ac9ab/47efb/cupcake4.jpg 201w,\n/static/1c8313d2a257abe8b6bbb97a743ac9ab/1e170/cupcake4.jpg 403w,\n/static/1c8313d2a257abe8b6bbb97a743ac9ab/2175c/cupcake4.jpg 806w,\n/static/1c8313d2a257abe8b6bbb97a743ac9ab/cd84f/cupcake4.jpg 1208w,\n/static/1c8313d2a257abe8b6bbb97a743ac9ab/57494/cupcake4.jpg 1611w,\n/static/1c8313d2a257abe8b6bbb97a743ac9ab/b35be/cupcake4.jpg 3641w",
              srcWebp:
                "/static/1c8313d2a257abe8b6bbb97a743ac9ab/e1d9e/cupcake4.webp",
              srcSetWebp:
                "/static/1c8313d2a257abe8b6bbb97a743ac9ab/bc2d6/cupcake4.webp 201w,\n/static/1c8313d2a257abe8b6bbb97a743ac9ab/824f7/cupcake4.webp 403w,\n/static/1c8313d2a257abe8b6bbb97a743ac9ab/e1d9e/cupcake4.webp 806w,\n/static/1c8313d2a257abe8b6bbb97a743ac9ab/6dfb2/cupcake4.webp 1208w,\n/static/1c8313d2a257abe8b6bbb97a743ac9ab/5263a/cupcake4.webp 1611w,\n/static/1c8313d2a257abe8b6bbb97a743ac9ab/b7b34/cupcake4.webp 3641w",
              sizes: "(max-width: 806px) 100vw, 806px",
            },
          },
        },
        name: "Cupcakes",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.0333333333333334,
              src:
                "/static/513b232d3f41addd901dea9191d0d7ba/2175c/cupcake5.jpg",
              srcSet:
                "/static/513b232d3f41addd901dea9191d0d7ba/47efb/cupcake5.jpg 155w,\n/static/513b232d3f41addd901dea9191d0d7ba/1e170/cupcake5.jpg 310w,\n/static/513b232d3f41addd901dea9191d0d7ba/2175c/cupcake5.jpg 619w,\n/static/513b232d3f41addd901dea9191d0d7ba/cd84f/cupcake5.jpg 929w,\n/static/513b232d3f41addd901dea9191d0d7ba/57494/cupcake5.jpg 1238w,\n/static/513b232d3f41addd901dea9191d0d7ba/8a73a/cupcake5.jpg 3024w",
              srcWebp:
                "/static/513b232d3f41addd901dea9191d0d7ba/e1d9e/cupcake5.webp",
              srcSetWebp:
                "/static/513b232d3f41addd901dea9191d0d7ba/bc2d6/cupcake5.webp 155w,\n/static/513b232d3f41addd901dea9191d0d7ba/824f7/cupcake5.webp 310w,\n/static/513b232d3f41addd901dea9191d0d7ba/e1d9e/cupcake5.webp 619w,\n/static/513b232d3f41addd901dea9191d0d7ba/6dfb2/cupcake5.webp 929w,\n/static/513b232d3f41addd901dea9191d0d7ba/5263a/cupcake5.webp 1238w,\n/static/513b232d3f41addd901dea9191d0d7ba/dd0a4/cupcake5.webp 3024w",
              sizes: "(max-width: 619px) 100vw, 619px",
            },
          },
        },
        name: "Cupcakes",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.1133333333333333,
              src:
                "/static/22dbf737403fedd681f6fd7564367c61/2175c/cupcake6.jpg",
              srcSet:
                "/static/22dbf737403fedd681f6fd7564367c61/47efb/cupcake6.jpg 167w,\n/static/22dbf737403fedd681f6fd7564367c61/1e170/cupcake6.jpg 334w,\n/static/22dbf737403fedd681f6fd7564367c61/2175c/cupcake6.jpg 668w,\n/static/22dbf737403fedd681f6fd7564367c61/cd84f/cupcake6.jpg 1002w,\n/static/22dbf737403fedd681f6fd7564367c61/57494/cupcake6.jpg 1336w,\n/static/22dbf737403fedd681f6fd7564367c61/951f4/cupcake6.jpg 3319w",
              srcWebp:
                "/static/22dbf737403fedd681f6fd7564367c61/e1d9e/cupcake6.webp",
              srcSetWebp:
                "/static/22dbf737403fedd681f6fd7564367c61/bc2d6/cupcake6.webp 167w,\n/static/22dbf737403fedd681f6fd7564367c61/824f7/cupcake6.webp 334w,\n/static/22dbf737403fedd681f6fd7564367c61/e1d9e/cupcake6.webp 668w,\n/static/22dbf737403fedd681f6fd7564367c61/6dfb2/cupcake6.webp 1002w,\n/static/22dbf737403fedd681f6fd7564367c61/5263a/cupcake6.webp 1336w,\n/static/22dbf737403fedd681f6fd7564367c61/125ed/cupcake6.webp 3319w",
              sizes: "(max-width: 668px) 100vw, 668px",
            },
          },
        },
        name: "Cupcakes",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 0.7666666666666667,
              src:
                "/static/4035382361c54663f86842c1a3b304ab/2175c/cupcake7.jpg",
              srcSet:
                "/static/4035382361c54663f86842c1a3b304ab/47efb/cupcake7.jpg 115w,\n/static/4035382361c54663f86842c1a3b304ab/1e170/cupcake7.jpg 230w,\n/static/4035382361c54663f86842c1a3b304ab/2175c/cupcake7.jpg 461w,\n/static/4035382361c54663f86842c1a3b304ab/cd84f/cupcake7.jpg 691w,\n/static/4035382361c54663f86842c1a3b304ab/57494/cupcake7.jpg 922w,\n/static/4035382361c54663f86842c1a3b304ab/36eac/cupcake7.jpg 2547w",
              srcWebp:
                "/static/4035382361c54663f86842c1a3b304ab/e1d9e/cupcake7.webp",
              srcSetWebp:
                "/static/4035382361c54663f86842c1a3b304ab/bc2d6/cupcake7.webp 115w,\n/static/4035382361c54663f86842c1a3b304ab/824f7/cupcake7.webp 230w,\n/static/4035382361c54663f86842c1a3b304ab/e1d9e/cupcake7.webp 461w,\n/static/4035382361c54663f86842c1a3b304ab/6dfb2/cupcake7.webp 691w,\n/static/4035382361c54663f86842c1a3b304ab/5263a/cupcake7.webp 922w,\n/static/4035382361c54663f86842c1a3b304ab/66436/cupcake7.webp 2547w",
              sizes: "(max-width: 461px) 100vw, 461px",
            },
          },
        },
        name: "Cupcakes",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1,
              src:
                "/static/17fc4ca95bb58c592700f01714aefc61/2175c/cupcake8.jpg",
              srcSet:
                "/static/17fc4ca95bb58c592700f01714aefc61/47efb/cupcake8.jpg 150w,\n/static/17fc4ca95bb58c592700f01714aefc61/1e170/cupcake8.jpg 300w,\n/static/17fc4ca95bb58c592700f01714aefc61/2175c/cupcake8.jpg 600w,\n/static/17fc4ca95bb58c592700f01714aefc61/cd84f/cupcake8.jpg 900w,\n/static/17fc4ca95bb58c592700f01714aefc61/57494/cupcake8.jpg 1200w,\n/static/17fc4ca95bb58c592700f01714aefc61/478aa/cupcake8.jpg 2310w",
              srcWebp:
                "/static/17fc4ca95bb58c592700f01714aefc61/e1d9e/cupcake8.webp",
              srcSetWebp:
                "/static/17fc4ca95bb58c592700f01714aefc61/bc2d6/cupcake8.webp 150w,\n/static/17fc4ca95bb58c592700f01714aefc61/824f7/cupcake8.webp 300w,\n/static/17fc4ca95bb58c592700f01714aefc61/e1d9e/cupcake8.webp 600w,\n/static/17fc4ca95bb58c592700f01714aefc61/6dfb2/cupcake8.webp 900w,\n/static/17fc4ca95bb58c592700f01714aefc61/5263a/cupcake8.webp 1200w,\n/static/17fc4ca95bb58c592700f01714aefc61/86848/cupcake8.webp 2310w",
              sizes: "(max-width: 600px) 100vw, 600px",
            },
          },
        },
        name: "Cupcakes",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.1,
              src:
                "/static/4850a10587cc6467cba72a330a04f28c/117a6/cupcake9.png",
              srcSet:
                "/static/4850a10587cc6467cba72a330a04f28c/ea52d/cupcake9.png 165w,\n/static/4850a10587cc6467cba72a330a04f28c/7a833/cupcake9.png 330w,\n/static/4850a10587cc6467cba72a330a04f28c/117a6/cupcake9.png 661w,\n/static/4850a10587cc6467cba72a330a04f28c/2f7e2/cupcake9.png 828w",
              srcWebp:
                "/static/4850a10587cc6467cba72a330a04f28c/e1d9e/cupcake9.webp",
              srcSetWebp:
                "/static/4850a10587cc6467cba72a330a04f28c/bc2d6/cupcake9.webp 165w,\n/static/4850a10587cc6467cba72a330a04f28c/824f7/cupcake9.webp 330w,\n/static/4850a10587cc6467cba72a330a04f28c/e1d9e/cupcake9.webp 661w,\n/static/4850a10587cc6467cba72a330a04f28c/d7650/cupcake9.webp 828w",
              sizes: "(max-width: 661px) 100vw, 661px",
            },
          },
        },
        name: "Cupcakes",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.3333333333333333,
              src:
                "/static/e0fd4287e815cccce9664b044aaabac0/2175c/brownies1.jpg",
              srcSet:
                "/static/e0fd4287e815cccce9664b044aaabac0/47efb/brownies1.jpg 200w,\n/static/e0fd4287e815cccce9664b044aaabac0/1e170/brownies1.jpg 400w,\n/static/e0fd4287e815cccce9664b044aaabac0/2175c/brownies1.jpg 800w,\n/static/e0fd4287e815cccce9664b044aaabac0/cd84f/brownies1.jpg 1200w,\n/static/e0fd4287e815cccce9664b044aaabac0/57494/brownies1.jpg 1600w,\n/static/e0fd4287e815cccce9664b044aaabac0/cb38f/brownies1.jpg 4032w",
              srcWebp:
                "/static/e0fd4287e815cccce9664b044aaabac0/e1d9e/brownies1.webp",
              srcSetWebp:
                "/static/e0fd4287e815cccce9664b044aaabac0/bc2d6/brownies1.webp 200w,\n/static/e0fd4287e815cccce9664b044aaabac0/824f7/brownies1.webp 400w,\n/static/e0fd4287e815cccce9664b044aaabac0/e1d9e/brownies1.webp 800w,\n/static/e0fd4287e815cccce9664b044aaabac0/6dfb2/brownies1.webp 1200w,\n/static/e0fd4287e815cccce9664b044aaabac0/5263a/brownies1.webp 1600w,\n/static/e0fd4287e815cccce9664b044aaabac0/3c611/brownies1.webp 4032w",
              sizes: "(max-width: 800px) 100vw, 800px",
            },
          },
        },
        name: "Brownies",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.4933333333333334,
              src:
                "/static/ed9cca924d24c3683eaca68471636db8/2175c/browniessmore.jpg",
              srcSet:
                "/static/ed9cca924d24c3683eaca68471636db8/47efb/browniessmore.jpg 224w,\n/static/ed9cca924d24c3683eaca68471636db8/1e170/browniessmore.jpg 449w,\n/static/ed9cca924d24c3683eaca68471636db8/2175c/browniessmore.jpg 898w,\n/static/ed9cca924d24c3683eaca68471636db8/cd84f/browniessmore.jpg 1347w,\n/static/ed9cca924d24c3683eaca68471636db8/57494/browniessmore.jpg 1796w,\n/static/ed9cca924d24c3683eaca68471636db8/23551/browniessmore.jpg 4032w",
              srcWebp:
                "/static/ed9cca924d24c3683eaca68471636db8/e1d9e/browniessmore.webp",
              srcSetWebp:
                "/static/ed9cca924d24c3683eaca68471636db8/bc2d6/browniessmore.webp 224w,\n/static/ed9cca924d24c3683eaca68471636db8/824f7/browniessmore.webp 449w,\n/static/ed9cca924d24c3683eaca68471636db8/e1d9e/browniessmore.webp 898w,\n/static/ed9cca924d24c3683eaca68471636db8/6dfb2/browniessmore.webp 1347w,\n/static/ed9cca924d24c3683eaca68471636db8/5263a/browniessmore.webp 1796w,\n/static/ed9cca924d24c3683eaca68471636db8/4847d/browniessmore.webp 4032w",
              sizes: "(max-width: 898px) 100vw, 898px",
            },
          },
        },
        name: "Brownies",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.88,
              src:
                "/static/33d8d9477d8fc6030f6064e9e0e6be15/2175c/brownies2.jpg",
              srcSet:
                "/static/33d8d9477d8fc6030f6064e9e0e6be15/47efb/brownies2.jpg 282w,\n/static/33d8d9477d8fc6030f6064e9e0e6be15/1e170/brownies2.jpg 564w,\n/static/33d8d9477d8fc6030f6064e9e0e6be15/2175c/brownies2.jpg 1127w,\n/static/33d8d9477d8fc6030f6064e9e0e6be15/cd84f/brownies2.jpg 1691w,\n/static/33d8d9477d8fc6030f6064e9e0e6be15/a4729/brownies2.jpg 1999w",
              srcWebp:
                "/static/33d8d9477d8fc6030f6064e9e0e6be15/e1d9e/brownies2.webp",
              srcSetWebp:
                "/static/33d8d9477d8fc6030f6064e9e0e6be15/bc2d6/brownies2.webp 282w,\n/static/33d8d9477d8fc6030f6064e9e0e6be15/824f7/brownies2.webp 564w,\n/static/33d8d9477d8fc6030f6064e9e0e6be15/e1d9e/brownies2.webp 1127w,\n/static/33d8d9477d8fc6030f6064e9e0e6be15/6dfb2/brownies2.webp 1691w,\n/static/33d8d9477d8fc6030f6064e9e0e6be15/7b1c7/brownies2.webp 1999w",
              sizes: "(max-width: 1127px) 100vw, 1127px",
            },
          },
        },
        name: "Brownies",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.32,
              src:
                "/static/70af1bd4603514c78c390c832b63b9f4/2175c/browniessmore2.jpg",
              srcSet:
                "/static/70af1bd4603514c78c390c832b63b9f4/47efb/browniessmore2.jpg 198w,\n/static/70af1bd4603514c78c390c832b63b9f4/1e170/browniessmore2.jpg 396w,\n/static/70af1bd4603514c78c390c832b63b9f4/2175c/browniessmore2.jpg 793w,\n/static/70af1bd4603514c78c390c832b63b9f4/cd84f/browniessmore2.jpg 1189w,\n/static/70af1bd4603514c78c390c832b63b9f4/57494/browniessmore2.jpg 1585w,\n/static/70af1bd4603514c78c390c832b63b9f4/2aa60/browniessmore2.jpg 3278w",
              srcWebp:
                "/static/70af1bd4603514c78c390c832b63b9f4/e1d9e/browniessmore2.webp",
              srcSetWebp:
                "/static/70af1bd4603514c78c390c832b63b9f4/bc2d6/browniessmore2.webp 198w,\n/static/70af1bd4603514c78c390c832b63b9f4/824f7/browniessmore2.webp 396w,\n/static/70af1bd4603514c78c390c832b63b9f4/e1d9e/browniessmore2.webp 793w,\n/static/70af1bd4603514c78c390c832b63b9f4/6dfb2/browniessmore2.webp 1189w,\n/static/70af1bd4603514c78c390c832b63b9f4/5263a/browniessmore2.webp 1585w,\n/static/70af1bd4603514c78c390c832b63b9f4/2666d/browniessmore2.webp 3278w",
              sizes: "(max-width: 793px) 100vw, 793px",
            },
          },
        },
        name: "Brownies",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.3333333333333333,
              src:
                "/static/a3ab233b566397650f1a3bd838b95bef/2175c/specials1.jpg",
              srcSet:
                "/static/a3ab233b566397650f1a3bd838b95bef/47efb/specials1.jpg 200w,\n/static/a3ab233b566397650f1a3bd838b95bef/1e170/specials1.jpg 400w,\n/static/a3ab233b566397650f1a3bd838b95bef/2175c/specials1.jpg 800w,\n/static/a3ab233b566397650f1a3bd838b95bef/cd84f/specials1.jpg 1200w,\n/static/a3ab233b566397650f1a3bd838b95bef/57494/specials1.jpg 1600w,\n/static/a3ab233b566397650f1a3bd838b95bef/cb38f/specials1.jpg 4032w",
              srcWebp:
                "/static/a3ab233b566397650f1a3bd838b95bef/e1d9e/specials1.webp",
              srcSetWebp:
                "/static/a3ab233b566397650f1a3bd838b95bef/bc2d6/specials1.webp 200w,\n/static/a3ab233b566397650f1a3bd838b95bef/824f7/specials1.webp 400w,\n/static/a3ab233b566397650f1a3bd838b95bef/e1d9e/specials1.webp 800w,\n/static/a3ab233b566397650f1a3bd838b95bef/6dfb2/specials1.webp 1200w,\n/static/a3ab233b566397650f1a3bd838b95bef/5263a/specials1.webp 1600w,\n/static/a3ab233b566397650f1a3bd838b95bef/3c611/specials1.webp 4032w",
              sizes: "(max-width: 800px) 100vw, 800px",
            },
          },
        },
        name: "Brownies",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.1866666666666668,
              src:
                "/static/da494e8245965cc77da27b614d02eecb/2175c/brownies4.jpg",
              srcSet:
                "/static/da494e8245965cc77da27b614d02eecb/47efb/brownies4.jpg 178w,\n/static/da494e8245965cc77da27b614d02eecb/1e170/brownies4.jpg 356w,\n/static/da494e8245965cc77da27b614d02eecb/2175c/brownies4.jpg 711w,\n/static/da494e8245965cc77da27b614d02eecb/cd84f/brownies4.jpg 1067w,\n/static/da494e8245965cc77da27b614d02eecb/57494/brownies4.jpg 1423w,\n/static/da494e8245965cc77da27b614d02eecb/cb38f/brownies4.jpg 3585w",
              srcWebp:
                "/static/da494e8245965cc77da27b614d02eecb/e1d9e/brownies4.webp",
              srcSetWebp:
                "/static/da494e8245965cc77da27b614d02eecb/bc2d6/brownies4.webp 178w,\n/static/da494e8245965cc77da27b614d02eecb/824f7/brownies4.webp 356w,\n/static/da494e8245965cc77da27b614d02eecb/e1d9e/brownies4.webp 711w,\n/static/da494e8245965cc77da27b614d02eecb/6dfb2/brownies4.webp 1067w,\n/static/da494e8245965cc77da27b614d02eecb/5263a/brownies4.webp 1423w,\n/static/da494e8245965cc77da27b614d02eecb/3c611/brownies4.webp 3585w",
              sizes: "(max-width: 711px) 100vw, 711px",
            },
          },
        },
        name: "Brownies",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.3333333333333333,
              src:
                "/static/b331f294da34b6bab52bcd7b726b5ad0/2175c/brownies5.jpg",
              srcSet:
                "/static/b331f294da34b6bab52bcd7b726b5ad0/47efb/brownies5.jpg 200w,\n/static/b331f294da34b6bab52bcd7b726b5ad0/1e170/brownies5.jpg 400w,\n/static/b331f294da34b6bab52bcd7b726b5ad0/2175c/brownies5.jpg 800w,\n/static/b331f294da34b6bab52bcd7b726b5ad0/cd84f/brownies5.jpg 1200w,\n/static/b331f294da34b6bab52bcd7b726b5ad0/57494/brownies5.jpg 1600w,\n/static/b331f294da34b6bab52bcd7b726b5ad0/cb38f/brownies5.jpg 4032w",
              srcWebp:
                "/static/b331f294da34b6bab52bcd7b726b5ad0/e1d9e/brownies5.webp",
              srcSetWebp:
                "/static/b331f294da34b6bab52bcd7b726b5ad0/bc2d6/brownies5.webp 200w,\n/static/b331f294da34b6bab52bcd7b726b5ad0/824f7/brownies5.webp 400w,\n/static/b331f294da34b6bab52bcd7b726b5ad0/e1d9e/brownies5.webp 800w,\n/static/b331f294da34b6bab52bcd7b726b5ad0/6dfb2/brownies5.webp 1200w,\n/static/b331f294da34b6bab52bcd7b726b5ad0/5263a/brownies5.webp 1600w,\n/static/b331f294da34b6bab52bcd7b726b5ad0/3c611/brownies5.webp 4032w",
              sizes: "(max-width: 800px) 100vw, 800px",
            },
          },
        },
        name: "Brownies",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.3333333333333333,
              src:
                "/static/ead91dc9edcd3219e33f580d1d9dace5/2175c/brownies7.jpg",
              srcSet:
                "/static/ead91dc9edcd3219e33f580d1d9dace5/47efb/brownies7.jpg 200w,\n/static/ead91dc9edcd3219e33f580d1d9dace5/1e170/brownies7.jpg 400w,\n/static/ead91dc9edcd3219e33f580d1d9dace5/2175c/brownies7.jpg 800w,\n/static/ead91dc9edcd3219e33f580d1d9dace5/cd84f/brownies7.jpg 1200w,\n/static/ead91dc9edcd3219e33f580d1d9dace5/57494/brownies7.jpg 1600w,\n/static/ead91dc9edcd3219e33f580d1d9dace5/cb38f/brownies7.jpg 4032w",
              srcWebp:
                "/static/ead91dc9edcd3219e33f580d1d9dace5/e1d9e/brownies7.webp",
              srcSetWebp:
                "/static/ead91dc9edcd3219e33f580d1d9dace5/bc2d6/brownies7.webp 200w,\n/static/ead91dc9edcd3219e33f580d1d9dace5/824f7/brownies7.webp 400w,\n/static/ead91dc9edcd3219e33f580d1d9dace5/e1d9e/brownies7.webp 800w,\n/static/ead91dc9edcd3219e33f580d1d9dace5/6dfb2/brownies7.webp 1200w,\n/static/ead91dc9edcd3219e33f580d1d9dace5/5263a/brownies7.webp 1600w,\n/static/ead91dc9edcd3219e33f580d1d9dace5/3c611/brownies7.webp 4032w",
              sizes: "(max-width: 800px) 100vw, 800px",
            },
          },
        },
        name: "Brownies",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 0.9933333333333333,
              src:
                "/static/42b402dcf13b341ac76c5c201938c70d/2175c/brownies6.jpg",
              srcSet:
                "/static/42b402dcf13b341ac76c5c201938c70d/47efb/brownies6.jpg 149w,\n/static/42b402dcf13b341ac76c5c201938c70d/1e170/brownies6.jpg 299w,\n/static/42b402dcf13b341ac76c5c201938c70d/2175c/brownies6.jpg 597w,\n/static/42b402dcf13b341ac76c5c201938c70d/cd84f/brownies6.jpg 896w,\n/static/42b402dcf13b341ac76c5c201938c70d/57494/brownies6.jpg 1194w,\n/static/42b402dcf13b341ac76c5c201938c70d/fe5e7/brownies6.jpg 3024w",
              srcWebp:
                "/static/42b402dcf13b341ac76c5c201938c70d/e1d9e/brownies6.webp",
              srcSetWebp:
                "/static/42b402dcf13b341ac76c5c201938c70d/bc2d6/brownies6.webp 149w,\n/static/42b402dcf13b341ac76c5c201938c70d/824f7/brownies6.webp 299w,\n/static/42b402dcf13b341ac76c5c201938c70d/e1d9e/brownies6.webp 597w,\n/static/42b402dcf13b341ac76c5c201938c70d/6dfb2/brownies6.webp 896w,\n/static/42b402dcf13b341ac76c5c201938c70d/5263a/brownies6.webp 1194w,\n/static/42b402dcf13b341ac76c5c201938c70d/fd474/brownies6.webp 3024w",
              sizes: "(max-width: 597px) 100vw, 597px",
            },
          },
        },
        name: "Brownies",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.06,
              src:
                "/static/613fd127d3fe3c0912fdd2c5b1d42db4/117a6/cerealseries1.png",
              srcSet:
                "/static/613fd127d3fe3c0912fdd2c5b1d42db4/ea52d/cerealseries1.png 159w,\n/static/613fd127d3fe3c0912fdd2c5b1d42db4/7a833/cerealseries1.png 317w,\n/static/613fd127d3fe3c0912fdd2c5b1d42db4/117a6/cerealseries1.png 634w,\n/static/613fd127d3fe3c0912fdd2c5b1d42db4/c4738/cerealseries1.png 951w,\n/static/613fd127d3fe3c0912fdd2c5b1d42db4/a9a59/cerealseries1.png 1188w",
              srcWebp:
                "/static/613fd127d3fe3c0912fdd2c5b1d42db4/e1d9e/cerealseries1.webp",
              srcSetWebp:
                "/static/613fd127d3fe3c0912fdd2c5b1d42db4/bc2d6/cerealseries1.webp 159w,\n/static/613fd127d3fe3c0912fdd2c5b1d42db4/824f7/cerealseries1.webp 317w,\n/static/613fd127d3fe3c0912fdd2c5b1d42db4/e1d9e/cerealseries1.webp 634w,\n/static/613fd127d3fe3c0912fdd2c5b1d42db4/6dfb2/cerealseries1.webp 951w,\n/static/613fd127d3fe3c0912fdd2c5b1d42db4/03b41/cerealseries1.webp 1188w",
              sizes: "(max-width: 634px) 100vw, 634px",
            },
          },
        },
        name: "CerealSeries",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.2266666666666666,
              src:
                "/static/8f39db7a409919d2e83dfceabc20c9ed/117a6/cerealseries2.png",
              srcSet:
                "/static/8f39db7a409919d2e83dfceabc20c9ed/ea52d/cerealseries2.png 184w,\n/static/8f39db7a409919d2e83dfceabc20c9ed/7a833/cerealseries2.png 368w,\n/static/8f39db7a409919d2e83dfceabc20c9ed/117a6/cerealseries2.png 735w,\n/static/8f39db7a409919d2e83dfceabc20c9ed/c4738/cerealseries2.png 1103w,\n/static/8f39db7a409919d2e83dfceabc20c9ed/00c69/cerealseries2.png 1170w",
              srcWebp:
                "/static/8f39db7a409919d2e83dfceabc20c9ed/e1d9e/cerealseries2.webp",
              srcSetWebp:
                "/static/8f39db7a409919d2e83dfceabc20c9ed/bc2d6/cerealseries2.webp 184w,\n/static/8f39db7a409919d2e83dfceabc20c9ed/824f7/cerealseries2.webp 368w,\n/static/8f39db7a409919d2e83dfceabc20c9ed/e1d9e/cerealseries2.webp 735w,\n/static/8f39db7a409919d2e83dfceabc20c9ed/6dfb2/cerealseries2.webp 1103w,\n/static/8f39db7a409919d2e83dfceabc20c9ed/5dd3f/cerealseries2.webp 1170w",
              sizes: "(max-width: 735px) 100vw, 735px",
            },
          },
        },
        name: "CerealSeries",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.44,
              src:
                "/static/cbe975027bbc547ec1992fddaf194fcd/2175c/cerealseries3.jpg",
              srcSet:
                "/static/cbe975027bbc547ec1992fddaf194fcd/47efb/cerealseries3.jpg 216w,\n/static/cbe975027bbc547ec1992fddaf194fcd/1e170/cerealseries3.jpg 432w,\n/static/cbe975027bbc547ec1992fddaf194fcd/2175c/cerealseries3.jpg 864w,\n/static/cbe975027bbc547ec1992fddaf194fcd/cd84f/cerealseries3.jpg 1295w,\n/static/cbe975027bbc547ec1992fddaf194fcd/57494/cerealseries3.jpg 1727w,\n/static/cbe975027bbc547ec1992fddaf194fcd/05bc9/cerealseries3.jpg 2464w",
              srcWebp:
                "/static/cbe975027bbc547ec1992fddaf194fcd/e1d9e/cerealseries3.webp",
              srcSetWebp:
                "/static/cbe975027bbc547ec1992fddaf194fcd/bc2d6/cerealseries3.webp 216w,\n/static/cbe975027bbc547ec1992fddaf194fcd/824f7/cerealseries3.webp 432w,\n/static/cbe975027bbc547ec1992fddaf194fcd/e1d9e/cerealseries3.webp 864w,\n/static/cbe975027bbc547ec1992fddaf194fcd/6dfb2/cerealseries3.webp 1295w,\n/static/cbe975027bbc547ec1992fddaf194fcd/5263a/cerealseries3.webp 1727w,\n/static/cbe975027bbc547ec1992fddaf194fcd/e2e71/cerealseries3.webp 2464w",
              sizes: "(max-width: 864px) 100vw, 864px",
            },
          },
        },
        name: "CerealSeries",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.7866666666666666,
              src:
                "/static/26a577c7f5c86135cc9889332a01ce38/2175c/cerealseries4.jpg",
              srcSet:
                "/static/26a577c7f5c86135cc9889332a01ce38/47efb/cerealseries4.jpg 268w,\n/static/26a577c7f5c86135cc9889332a01ce38/1e170/cerealseries4.jpg 536w,\n/static/26a577c7f5c86135cc9889332a01ce38/2175c/cerealseries4.jpg 1072w,\n/static/26a577c7f5c86135cc9889332a01ce38/cd84f/cerealseries4.jpg 1608w,\n/static/26a577c7f5c86135cc9889332a01ce38/57494/cerealseries4.jpg 2143w,\n/static/26a577c7f5c86135cc9889332a01ce38/55a68/cerealseries4.jpg 3992w",
              srcWebp:
                "/static/26a577c7f5c86135cc9889332a01ce38/e1d9e/cerealseries4.webp",
              srcSetWebp:
                "/static/26a577c7f5c86135cc9889332a01ce38/bc2d6/cerealseries4.webp 268w,\n/static/26a577c7f5c86135cc9889332a01ce38/824f7/cerealseries4.webp 536w,\n/static/26a577c7f5c86135cc9889332a01ce38/e1d9e/cerealseries4.webp 1072w,\n/static/26a577c7f5c86135cc9889332a01ce38/6dfb2/cerealseries4.webp 1608w,\n/static/26a577c7f5c86135cc9889332a01ce38/5263a/cerealseries4.webp 2143w,\n/static/26a577c7f5c86135cc9889332a01ce38/13085/cerealseries4.webp 3992w",
              sizes: "(max-width: 1072px) 100vw, 1072px",
            },
          },
        },
        name: "CerealSeries",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.12,
              src:
                "/static/4c61d2b40bc37411c3f82013c7d43603/2175c/cerealseries5.jpg",
              srcSet:
                "/static/4c61d2b40bc37411c3f82013c7d43603/47efb/cerealseries5.jpg 168w,\n/static/4c61d2b40bc37411c3f82013c7d43603/1e170/cerealseries5.jpg 337w,\n/static/4c61d2b40bc37411c3f82013c7d43603/2175c/cerealseries5.jpg 673w,\n/static/4c61d2b40bc37411c3f82013c7d43603/cd84f/cerealseries5.jpg 1010w,\n/static/4c61d2b40bc37411c3f82013c7d43603/57494/cerealseries5.jpg 1346w,\n/static/4c61d2b40bc37411c3f82013c7d43603/fd572/cerealseries5.jpg 3010w",
              srcWebp:
                "/static/4c61d2b40bc37411c3f82013c7d43603/e1d9e/cerealseries5.webp",
              srcSetWebp:
                "/static/4c61d2b40bc37411c3f82013c7d43603/bc2d6/cerealseries5.webp 168w,\n/static/4c61d2b40bc37411c3f82013c7d43603/824f7/cerealseries5.webp 337w,\n/static/4c61d2b40bc37411c3f82013c7d43603/e1d9e/cerealseries5.webp 673w,\n/static/4c61d2b40bc37411c3f82013c7d43603/6dfb2/cerealseries5.webp 1010w,\n/static/4c61d2b40bc37411c3f82013c7d43603/5263a/cerealseries5.webp 1346w,\n/static/4c61d2b40bc37411c3f82013c7d43603/85b96/cerealseries5.webp 3010w",
              sizes: "(max-width: 673px) 100vw, 673px",
            },
          },
        },
        name: "CerealSeries",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.3333333333333333,
              src:
                "/static/9eee0290503e0fd990f7a971ca5ee8d0/2175c/cerealseries6.jpg",
              srcSet:
                "/static/9eee0290503e0fd990f7a971ca5ee8d0/47efb/cerealseries6.jpg 200w,\n/static/9eee0290503e0fd990f7a971ca5ee8d0/1e170/cerealseries6.jpg 400w,\n/static/9eee0290503e0fd990f7a971ca5ee8d0/2175c/cerealseries6.jpg 800w,\n/static/9eee0290503e0fd990f7a971ca5ee8d0/cd84f/cerealseries6.jpg 1200w,\n/static/9eee0290503e0fd990f7a971ca5ee8d0/57494/cerealseries6.jpg 1600w,\n/static/9eee0290503e0fd990f7a971ca5ee8d0/cb38f/cerealseries6.jpg 4032w",
              srcWebp:
                "/static/9eee0290503e0fd990f7a971ca5ee8d0/e1d9e/cerealseries6.webp",
              srcSetWebp:
                "/static/9eee0290503e0fd990f7a971ca5ee8d0/bc2d6/cerealseries6.webp 200w,\n/static/9eee0290503e0fd990f7a971ca5ee8d0/824f7/cerealseries6.webp 400w,\n/static/9eee0290503e0fd990f7a971ca5ee8d0/e1d9e/cerealseries6.webp 800w,\n/static/9eee0290503e0fd990f7a971ca5ee8d0/6dfb2/cerealseries6.webp 1200w,\n/static/9eee0290503e0fd990f7a971ca5ee8d0/5263a/cerealseries6.webp 1600w,\n/static/9eee0290503e0fd990f7a971ca5ee8d0/3c611/cerealseries6.webp 4032w",
              sizes: "(max-width: 800px) 100vw, 800px",
            },
          },
        },
        name: "CerealSeries",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.4466666666666668,
              src:
                "/static/2acc4e9285875329fb47d19ed95d0f02/2175c/cinnabon1.jpg",
              srcSet:
                "/static/2acc4e9285875329fb47d19ed95d0f02/47efb/cinnabon1.jpg 217w,\n/static/2acc4e9285875329fb47d19ed95d0f02/1e170/cinnabon1.jpg 435w,\n/static/2acc4e9285875329fb47d19ed95d0f02/2175c/cinnabon1.jpg 869w,\n/static/2acc4e9285875329fb47d19ed95d0f02/cd84f/cinnabon1.jpg 1304w,\n/static/2acc4e9285875329fb47d19ed95d0f02/57494/cinnabon1.jpg 1739w,\n/static/2acc4e9285875329fb47d19ed95d0f02/27ead/cinnabon1.jpg 3364w",
              srcWebp:
                "/static/2acc4e9285875329fb47d19ed95d0f02/e1d9e/cinnabon1.webp",
              srcSetWebp:
                "/static/2acc4e9285875329fb47d19ed95d0f02/bc2d6/cinnabon1.webp 217w,\n/static/2acc4e9285875329fb47d19ed95d0f02/824f7/cinnabon1.webp 435w,\n/static/2acc4e9285875329fb47d19ed95d0f02/e1d9e/cinnabon1.webp 869w,\n/static/2acc4e9285875329fb47d19ed95d0f02/6dfb2/cinnabon1.webp 1304w,\n/static/2acc4e9285875329fb47d19ed95d0f02/5263a/cinnabon1.webp 1739w,\n/static/2acc4e9285875329fb47d19ed95d0f02/aae1b/cinnabon1.webp 3364w",
              sizes: "(max-width: 869px) 100vw, 869px",
            },
          },
        },
        name: "Specials",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 0.9266666666666666,
              src:
                "/static/571a6e0dfa1e67a3842eb78e44a8a8b7/2175c/cinnabon2.jpg",
              srcSet:
                "/static/571a6e0dfa1e67a3842eb78e44a8a8b7/47efb/cinnabon2.jpg 139w,\n/static/571a6e0dfa1e67a3842eb78e44a8a8b7/1e170/cinnabon2.jpg 279w,\n/static/571a6e0dfa1e67a3842eb78e44a8a8b7/2175c/cinnabon2.jpg 557w,\n/static/571a6e0dfa1e67a3842eb78e44a8a8b7/cd84f/cinnabon2.jpg 836w,\n/static/571a6e0dfa1e67a3842eb78e44a8a8b7/57494/cinnabon2.jpg 1114w,\n/static/571a6e0dfa1e67a3842eb78e44a8a8b7/0370b/cinnabon2.jpg 3003w",
              srcWebp:
                "/static/571a6e0dfa1e67a3842eb78e44a8a8b7/e1d9e/cinnabon2.webp",
              srcSetWebp:
                "/static/571a6e0dfa1e67a3842eb78e44a8a8b7/bc2d6/cinnabon2.webp 139w,\n/static/571a6e0dfa1e67a3842eb78e44a8a8b7/824f7/cinnabon2.webp 279w,\n/static/571a6e0dfa1e67a3842eb78e44a8a8b7/e1d9e/cinnabon2.webp 557w,\n/static/571a6e0dfa1e67a3842eb78e44a8a8b7/6dfb2/cinnabon2.webp 836w,\n/static/571a6e0dfa1e67a3842eb78e44a8a8b7/5263a/cinnabon2.webp 1114w,\n/static/571a6e0dfa1e67a3842eb78e44a8a8b7/9e34e/cinnabon2.webp 3003w",
              sizes: "(max-width: 557px) 100vw, 557px",
            },
          },
        },
        name: "Specials",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.1,
              src:
                "/static/17fcb8cc513c9589a495ad2059aadd5b/2175c/cinnabon3.jpg",
              srcSet:
                "/static/17fcb8cc513c9589a495ad2059aadd5b/47efb/cinnabon3.jpg 165w,\n/static/17fcb8cc513c9589a495ad2059aadd5b/1e170/cinnabon3.jpg 329w,\n/static/17fcb8cc513c9589a495ad2059aadd5b/2175c/cinnabon3.jpg 659w,\n/static/17fcb8cc513c9589a495ad2059aadd5b/cd84f/cinnabon3.jpg 988w,\n/static/17fcb8cc513c9589a495ad2059aadd5b/57494/cinnabon3.jpg 1318w,\n/static/17fcb8cc513c9589a495ad2059aadd5b/55fd6/cinnabon3.jpg 3010w",
              srcWebp:
                "/static/17fcb8cc513c9589a495ad2059aadd5b/e1d9e/cinnabon3.webp",
              srcSetWebp:
                "/static/17fcb8cc513c9589a495ad2059aadd5b/bc2d6/cinnabon3.webp 165w,\n/static/17fcb8cc513c9589a495ad2059aadd5b/824f7/cinnabon3.webp 329w,\n/static/17fcb8cc513c9589a495ad2059aadd5b/e1d9e/cinnabon3.webp 659w,\n/static/17fcb8cc513c9589a495ad2059aadd5b/6dfb2/cinnabon3.webp 988w,\n/static/17fcb8cc513c9589a495ad2059aadd5b/5263a/cinnabon3.webp 1318w,\n/static/17fcb8cc513c9589a495ad2059aadd5b/182be/cinnabon3.webp 3010w",
              sizes: "(max-width: 659px) 100vw, 659px",
            },
          },
        },
        name: "Specials",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.3333333333333333,
              src:
                "/static/8adba62f2ccfe8af4f0d90de0faef9a4/2175c/cinnabon4.jpg",
              srcSet:
                "/static/8adba62f2ccfe8af4f0d90de0faef9a4/47efb/cinnabon4.jpg 200w,\n/static/8adba62f2ccfe8af4f0d90de0faef9a4/1e170/cinnabon4.jpg 400w,\n/static/8adba62f2ccfe8af4f0d90de0faef9a4/2175c/cinnabon4.jpg 800w,\n/static/8adba62f2ccfe8af4f0d90de0faef9a4/cd84f/cinnabon4.jpg 1200w,\n/static/8adba62f2ccfe8af4f0d90de0faef9a4/57494/cinnabon4.jpg 1600w,\n/static/8adba62f2ccfe8af4f0d90de0faef9a4/cb38f/cinnabon4.jpg 4032w",
              srcWebp:
                "/static/8adba62f2ccfe8af4f0d90de0faef9a4/e1d9e/cinnabon4.webp",
              srcSetWebp:
                "/static/8adba62f2ccfe8af4f0d90de0faef9a4/bc2d6/cinnabon4.webp 200w,\n/static/8adba62f2ccfe8af4f0d90de0faef9a4/824f7/cinnabon4.webp 400w,\n/static/8adba62f2ccfe8af4f0d90de0faef9a4/e1d9e/cinnabon4.webp 800w,\n/static/8adba62f2ccfe8af4f0d90de0faef9a4/6dfb2/cinnabon4.webp 1200w,\n/static/8adba62f2ccfe8af4f0d90de0faef9a4/5263a/cinnabon4.webp 1600w,\n/static/8adba62f2ccfe8af4f0d90de0faef9a4/3c611/cinnabon4.webp 4032w",
              sizes: "(max-width: 800px) 100vw, 800px",
            },
          },
        },
        name: "Specials",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.5533333333333332,
              src:
                "/static/4a5ab1c4c241bfbdbee2c2abda6d6e62/117a6/krispie1.png",
              srcSet:
                "/static/4a5ab1c4c241bfbdbee2c2abda6d6e62/ea52d/krispie1.png 233w,\n/static/4a5ab1c4c241bfbdbee2c2abda6d6e62/7a833/krispie1.png 467w,\n/static/4a5ab1c4c241bfbdbee2c2abda6d6e62/117a6/krispie1.png 933w,\n/static/4a5ab1c4c241bfbdbee2c2abda6d6e62/9edd6/krispie1.png 1187w",
              srcWebp:
                "/static/4a5ab1c4c241bfbdbee2c2abda6d6e62/e1d9e/krispie1.webp",
              srcSetWebp:
                "/static/4a5ab1c4c241bfbdbee2c2abda6d6e62/bc2d6/krispie1.webp 233w,\n/static/4a5ab1c4c241bfbdbee2c2abda6d6e62/824f7/krispie1.webp 467w,\n/static/4a5ab1c4c241bfbdbee2c2abda6d6e62/e1d9e/krispie1.webp 933w,\n/static/4a5ab1c4c241bfbdbee2c2abda6d6e62/d5cd3/krispie1.webp 1187w",
              sizes: "(max-width: 933px) 100vw, 933px",
            },
          },
        },
        name: "Specials",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.32,
              src:
                "/static/abcabb0a5450fbeb8950c61dd587059f/2175c/specials7.jpg",
              srcSet:
                "/static/abcabb0a5450fbeb8950c61dd587059f/47efb/specials7.jpg 198w,\n/static/abcabb0a5450fbeb8950c61dd587059f/1e170/specials7.jpg 396w,\n/static/abcabb0a5450fbeb8950c61dd587059f/2175c/specials7.jpg 792w,\n/static/abcabb0a5450fbeb8950c61dd587059f/06695/specials7.jpg 1001w",
              srcWebp:
                "/static/abcabb0a5450fbeb8950c61dd587059f/e1d9e/specials7.webp",
              srcSetWebp:
                "/static/abcabb0a5450fbeb8950c61dd587059f/bc2d6/specials7.webp 198w,\n/static/abcabb0a5450fbeb8950c61dd587059f/824f7/specials7.webp 396w,\n/static/abcabb0a5450fbeb8950c61dd587059f/e1d9e/specials7.webp 792w,\n/static/abcabb0a5450fbeb8950c61dd587059f/70768/specials7.webp 1001w",
              sizes: "(max-width: 792px) 100vw, 792px",
            },
          },
        },
        name: "Specials",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.3,
              src:
                "/static/ccc310e3195d1e8a9664e7f91347f937/2175c/krispie2.jpg",
              srcSet:
                "/static/ccc310e3195d1e8a9664e7f91347f937/47efb/krispie2.jpg 195w,\n/static/ccc310e3195d1e8a9664e7f91347f937/1e170/krispie2.jpg 391w,\n/static/ccc310e3195d1e8a9664e7f91347f937/2175c/krispie2.jpg 781w,\n/static/ccc310e3195d1e8a9664e7f91347f937/cd84f/krispie2.jpg 1172w,\n/static/ccc310e3195d1e8a9664e7f91347f937/57494/krispie2.jpg 1562w,\n/static/ccc310e3195d1e8a9664e7f91347f937/ba928/krispie2.jpg 2993w",
              srcWebp:
                "/static/ccc310e3195d1e8a9664e7f91347f937/e1d9e/krispie2.webp",
              srcSetWebp:
                "/static/ccc310e3195d1e8a9664e7f91347f937/bc2d6/krispie2.webp 195w,\n/static/ccc310e3195d1e8a9664e7f91347f937/824f7/krispie2.webp 391w,\n/static/ccc310e3195d1e8a9664e7f91347f937/e1d9e/krispie2.webp 781w,\n/static/ccc310e3195d1e8a9664e7f91347f937/6dfb2/krispie2.webp 1172w,\n/static/ccc310e3195d1e8a9664e7f91347f937/5263a/krispie2.webp 1562w,\n/static/ccc310e3195d1e8a9664e7f91347f937/f2dfb/krispie2.webp 2993w",
              sizes: "(max-width: 781px) 100vw, 781px",
            },
          },
        },
        name: "Specials",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.2933333333333332,
              src:
                "/static/0335e5bc5e109dd91465ad7c3187c3d4/2175c/krispie4.jpg",
              srcSet:
                "/static/0335e5bc5e109dd91465ad7c3187c3d4/47efb/krispie4.jpg 194w,\n/static/0335e5bc5e109dd91465ad7c3187c3d4/1e170/krispie4.jpg 389w,\n/static/0335e5bc5e109dd91465ad7c3187c3d4/2175c/krispie4.jpg 777w,\n/static/0335e5bc5e109dd91465ad7c3187c3d4/cd84f/krispie4.jpg 1166w,\n/static/0335e5bc5e109dd91465ad7c3187c3d4/57494/krispie4.jpg 1555w,\n/static/0335e5bc5e109dd91465ad7c3187c3d4/98c4f/krispie4.jpg 3856w",
              srcWebp:
                "/static/0335e5bc5e109dd91465ad7c3187c3d4/e1d9e/krispie4.webp",
              srcSetWebp:
                "/static/0335e5bc5e109dd91465ad7c3187c3d4/bc2d6/krispie4.webp 194w,\n/static/0335e5bc5e109dd91465ad7c3187c3d4/824f7/krispie4.webp 389w,\n/static/0335e5bc5e109dd91465ad7c3187c3d4/e1d9e/krispie4.webp 777w,\n/static/0335e5bc5e109dd91465ad7c3187c3d4/6dfb2/krispie4.webp 1166w,\n/static/0335e5bc5e109dd91465ad7c3187c3d4/5263a/krispie4.webp 1555w,\n/static/0335e5bc5e109dd91465ad7c3187c3d4/3f367/krispie4.webp 3856w",
              sizes: "(max-width: 777px) 100vw, 777px",
            },
          },
        },
        name: "CerealSeries",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.54,
              src:
                "/static/9f4280eebfee4ac1d76ab97015a06c96/2175c/krispie5.jpg",
              srcSet:
                "/static/9f4280eebfee4ac1d76ab97015a06c96/47efb/krispie5.jpg 231w,\n/static/9f4280eebfee4ac1d76ab97015a06c96/1e170/krispie5.jpg 462w,\n/static/9f4280eebfee4ac1d76ab97015a06c96/2175c/krispie5.jpg 924w,\n/static/9f4280eebfee4ac1d76ab97015a06c96/cd84f/krispie5.jpg 1386w,\n/static/9f4280eebfee4ac1d76ab97015a06c96/57494/krispie5.jpg 1847w,\n/static/9f4280eebfee4ac1d76ab97015a06c96/2f7ce/krispie5.jpg 2962w",
              srcWebp:
                "/static/9f4280eebfee4ac1d76ab97015a06c96/e1d9e/krispie5.webp",
              srcSetWebp:
                "/static/9f4280eebfee4ac1d76ab97015a06c96/bc2d6/krispie5.webp 231w,\n/static/9f4280eebfee4ac1d76ab97015a06c96/824f7/krispie5.webp 462w,\n/static/9f4280eebfee4ac1d76ab97015a06c96/e1d9e/krispie5.webp 924w,\n/static/9f4280eebfee4ac1d76ab97015a06c96/6dfb2/krispie5.webp 1386w,\n/static/9f4280eebfee4ac1d76ab97015a06c96/5263a/krispie5.webp 1847w,\n/static/9f4280eebfee4ac1d76ab97015a06c96/9d2be/krispie5.webp 2962w",
              sizes: "(max-width: 924px) 100vw, 924px",
            },
          },
        },
        name: "CerealSeries",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.3333333333333333,
              src:
                "/static/c7f13ad0d0777315638e4856233bfa7e/117a6/krispie8.png",
              srcSet:
                "/static/c7f13ad0d0777315638e4856233bfa7e/ea52d/krispie8.png 200w,\n/static/c7f13ad0d0777315638e4856233bfa7e/7a833/krispie8.png 400w,\n/static/c7f13ad0d0777315638e4856233bfa7e/117a6/krispie8.png 800w,\n/static/c7f13ad0d0777315638e4856233bfa7e/a880d/krispie8.png 1078w",
              srcWebp:
                "/static/c7f13ad0d0777315638e4856233bfa7e/e1d9e/krispie8.webp",
              srcSetWebp:
                "/static/c7f13ad0d0777315638e4856233bfa7e/bc2d6/krispie8.webp 200w,\n/static/c7f13ad0d0777315638e4856233bfa7e/824f7/krispie8.webp 400w,\n/static/c7f13ad0d0777315638e4856233bfa7e/e1d9e/krispie8.webp 800w,\n/static/c7f13ad0d0777315638e4856233bfa7e/1aa39/krispie8.webp 1078w",
              sizes: "(max-width: 800px) 100vw, 800px",
            },
          },
        },
        name: "CerealSeries",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.3333333333333333,
              src:
                "/static/a3ab233b566397650f1a3bd838b95bef/2175c/specials1.jpg",
              srcSet:
                "/static/a3ab233b566397650f1a3bd838b95bef/47efb/specials1.jpg 200w,\n/static/a3ab233b566397650f1a3bd838b95bef/1e170/specials1.jpg 400w,\n/static/a3ab233b566397650f1a3bd838b95bef/2175c/specials1.jpg 800w,\n/static/a3ab233b566397650f1a3bd838b95bef/cd84f/specials1.jpg 1200w,\n/static/a3ab233b566397650f1a3bd838b95bef/57494/specials1.jpg 1600w,\n/static/a3ab233b566397650f1a3bd838b95bef/cb38f/specials1.jpg 4032w",
              srcWebp:
                "/static/a3ab233b566397650f1a3bd838b95bef/e1d9e/specials1.webp",
              srcSetWebp:
                "/static/a3ab233b566397650f1a3bd838b95bef/bc2d6/specials1.webp 200w,\n/static/a3ab233b566397650f1a3bd838b95bef/824f7/specials1.webp 400w,\n/static/a3ab233b566397650f1a3bd838b95bef/e1d9e/specials1.webp 800w,\n/static/a3ab233b566397650f1a3bd838b95bef/6dfb2/specials1.webp 1200w,\n/static/a3ab233b566397650f1a3bd838b95bef/5263a/specials1.webp 1600w,\n/static/a3ab233b566397650f1a3bd838b95bef/3c611/specials1.webp 4032w",
              sizes: "(max-width: 800px) 100vw, 800px",
            },
          },
        },
        name: "Specials",
      },
      {
        img: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1.8333333333333333,
              src:
                "/static/38b588c78018f9bf9fa6df7ef78fab24/2175c/specials2.jpg",
              srcSet:
                "/static/38b588c78018f9bf9fa6df7ef78fab24/47efb/specials2.jpg 275w,\n/static/38b588c78018f9bf9fa6df7ef78fab24/1e170/specials2.jpg 549w,\n/static/38b588c78018f9bf9fa6df7ef78fab24/2175c/specials2.jpg 1098w,\n/static/38b588c78018f9bf9fa6df7ef78fab24/cd84f/specials2.jpg 1647w,\n/static/38b588c78018f9bf9fa6df7ef78fab24/57494/specials2.jpg 2196w,\n/static/38b588c78018f9bf9fa6df7ef78fab24/67e5e/specials2.jpg 4010w",
              srcWebp:
                "/static/38b588c78018f9bf9fa6df7ef78fab24/e1d9e/specials2.webp",
              srcSetWebp:
                "/static/38b588c78018f9bf9fa6df7ef78fab24/bc2d6/specials2.webp 275w,\n/static/38b588c78018f9bf9fa6df7ef78fab24/824f7/specials2.webp 549w,\n/static/38b588c78018f9bf9fa6df7ef78fab24/e1d9e/specials2.webp 1098w,\n/static/38b588c78018f9bf9fa6df7ef78fab24/6dfb2/specials2.webp 1647w,\n/static/38b588c78018f9bf9fa6df7ef78fab24/5263a/specials2.webp 2196w,\n/static/38b588c78018f9bf9fa6df7ef78fab24/2174c/specials2.webp 4010w",
              sizes: "(max-width: 1098px) 100vw, 1098px",
            },
          },
        },
        name: "Specials",
      },
    ]
    const tree = renderer.create(<ImgGallery products={products} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
