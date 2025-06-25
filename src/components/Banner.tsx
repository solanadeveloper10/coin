import { Box, GlobalStyles } from "@mui/material";

const Banner = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          "@keyframes levitate": {
            "0%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-20px)" },
            "100%": { transform: "translateY(0)" },
          },
        }}
      />
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          position: "relative",
          backgroundImage: { xs: "url(/room2.png)", md: "url(/room.png)" },
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        {/* main images */}
        <Box
          component='a'
          href='#'
          target='_blank'
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: window.innerHeight > 700 ? "7%" : "12%", md: "50%" },
            transform: {
              xs:
                window.innerHeight > 700
                  ? "translate(0, calc(-50% - 215px))"
                  : "translate(0, calc(-50% - 180px))",
              lg: "translate(calc(-50% - 265px), calc(-50% + 40px))",
              xl: "translate(calc(-50% - 440px), calc(-50% + 40px))",
            },
            zIndex: 11,
          }}
        >
          <Box
            component='img'
            src='/tg.png'
            sx={{
              height: {
                xs: window.innerHeight > 700 ? 140 : 110,
                lg: 260,
                xl: 400,
              },
              transition: "0.5s",
              "&:hover": {
                filter:
                  "drop-shadow(0 0 24px rgba(74, 40, 197, 0.8)) drop-shadow(0 0 48px rgba(43, 76, 236, 0.5))",
              },
            }}
          />
        </Box>
        <Box
          component='a'
          href='#'
          target='_blank'
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: {
              xs:
                window.innerHeight > 700
                  ? "translate(50px, calc(-50% - 185px))"
                  : "translate(45px, calc(-50% - 155px))",
              lg: "translate(calc(-50% + 265px), calc(-50% + 40px))",
              xl: "translate(calc(-50% + 440px), calc(-50% + 40px))",
            },
            zIndex: 11,
          }}
        >
          <Box
            component='img'
            src='/x.png'
            sx={{
              transition: "0.5s",
              "&:hover": {
                filter:
                  "drop-shadow(0 0 24px rgba(255,255,180,0.8)) drop-shadow(0 0 48px rgba(255,255,180,0.5))",
              },
              height: {
                xs: window.innerHeight > 700 ? 140 : 110,
                lg: 270,
                xl: 400,
              },
            }}
          />
        </Box>

        {/* side images */}
        <Box
          component='a'
          href='#'
          target='_blank'
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: {
              xs: "translate(calc(-50% - 440px), calc(-50% + 40px))",
              lg: "translate(calc(-50% - 520px), -50%)",
              xl: "translate(calc(-50% - 850px), -50%)",
            },
            display: { xs: "none", md: "block" },
            zIndex: 11,
          }}
        >
          <Box
            component='img'
            src='/dxs.png'
            sx={{
              transition: "0.5s",
              "&:hover": {
                filter:
                  "drop-shadow(0 0 24px rgba(255,255,180,0.8)) drop-shadow(0 0 48px rgba(255,255,180,0.5))",
              },
              height: {
                xs: 150,
                lg: 270,
                xl: 450,
              },
            }}
          />
        </Box>
        <Box
          component='a'
          href='#'
          target='_blank'
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: {
              xs: "translate(calc(-50% - 440px), calc(-50% + 40px))",
              lg: "translate(calc(-50% + 520px), -50%)",
              xl: "translate(calc(-50% + 850px), -50%)",
            },
            display: { xs: "none", md: "block" },
            zIndex: 11,
          }}
        >
          <Box
            component='img'
            src='/dxt2.png'
            sx={{
              transition: "0.5s",
              "&:hover": {
                filter:
                  "drop-shadow(0 0 24px rgba(74, 40, 197, 0.8)) drop-shadow(0 0 48px rgba(43, 76, 236, 0.5))",
              },
              height: {
                xs: 110,
                lg: 270,
                xl: 400,
              },
            }}
          />
        </Box>

        {/* Mobile images */}
        <Box
          component='a'
          href='#'
          target='_blank'
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: window.innerHeight > 700 ? "32%" : "12%", md: "50%" },
            transform: {
              xs:
                window.innerHeight > 700
                  ? "translate(0, calc(-50% - 85px))"
                  : "translate(90px, calc(-50% - 60px))",
            },
            display: { xs: "block", md: "none" },
            zIndex: 11,
          }}
        >
          <Box
            component='img'
            src='/dxs2.png'
            sx={{
              height: {
                xs: window.innerHeight > 700 ? 150 : 110,
                lg: 260,
                xl: 400,
              },
              transition: "0.5s",
              "&:hover": {
                filter:
                  "drop-shadow(0 0 24px rgba(255,255,180,0.8)) drop-shadow(0 0 48px rgba(255,255,180,0.5))",
              },
            }}
          />
        </Box>
        <Box
          component='a'
          href='#'
          target='_blank'
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: {
              xs:
                window.innerHeight > 700
                  ? "translate(80px, calc(-50% - 5px))"
                  : "translate(68px, calc(-50% - 5px))",
            },
            display: { xs: "block", md: "none" },
            zIndex: 11,
          }}
        >
          <Box
            component='img'
            src='/dxt.png'
            sx={{
              transition: "0.5s",
              "&:hover": {
                filter:
                  "drop-shadow(0 0 24px rgba(255,255,180,0.8)) drop-shadow(0 0 48px rgba(255,255,180,0.5))",
              },
              height: {
                xs: window.innerHeight > 700 ? 120 : 95,
              },
            }}
          />
        </Box>

        {/* main frogs */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "65%", md: "50%" },
            left: { xs: "-15%", md: "50%" },
            transform: {
              xs: "scaleX(-1)",
              lg: "translate(calc(-50% + 480px), calc(-50% + 150px))",
              xl: "translate(calc(-50% + 770px), calc(-50% + 250px))",
            },
          }}
        >
          <Box
            component='img'
            src='/frog.png'
            sx={{
              height: {
                xs: window.innerHeight > 700 ? 190 : 160,
                lg: 250,
                xl: 350,
              },
              animation: "levitate 2.5s ease-in-out infinite",
            }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "65%", md: "50%" },
            left: { xs: "unset", md: "50%" },
            right: { xs: "-15%", md: "unset" },
            transform: {
              lg: "translate(calc(-50% - 480px), calc(-50% + 150px)) scaleX(-1)",
              xl: "translate(calc(-50% - 770px), calc(-50% + 250px)) scaleX(-1)",
            },
          }}
        >
          <Box
            component='img'
            src='/frog.png'
            sx={{
              height: {
                xs: window.innerHeight > 700 ? 190 : 160,
                lg: 270,
                xl: 350,
              },
              animation: "levitate 2.5s ease-in-out infinite",
              animationDelay: "1.25s",
            }}
          />
        </Box>

        {/* side frogs */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "-10%", lg: "-13%", xl: "-10%" },
            left: { xs: "-22%", lg: "-12%", xl: "-12%" },
            transform: "scaleX(-1)",
          }}
        >
          <Box
            component='img'
            src='/frog.png'
            sx={{
              height: {
                xs: window.innerHeight > 700 ? 190 : 160,
                lg: 370,
                xl: 550,
              },
              animation: "levitate 3s ease-in-out infinite",
              animationDelay: "0.5s",
              display: { xs: "none", md: "block" },
            }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "-10%", lg: "-13%", xl: "-10%" },
            right: { xs: "-22%", lg: "-12%", xl: "-12%" },
            display: { xs: "none", md: "block" },
          }}
        >
          <Box
            component='img'
            src='/frog.png'
            sx={{
              height: {
                xs: window.innerHeight > 700 ? 190 : 160,
                lg: 370,
                xl: 550,
              },
              animation: "levitate 3s ease-in-out infinite",
              animationDelay: "1.5s",
            }}
          />
        </Box>

        {/* coin flip */}

        <Box
          component='img'
          src='/coin.gif'
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: {
              xs:
                window.innerHeight > 700
                  ? "translate(calc(-50% + 0px), calc(-50% + 120px))"
                  : "translate(calc(-50% + 0px), calc(-50% + 80px))",
              lg: "translate(calc(-50% + 0px), calc(-50% + 60px))",
              xl: "translate(calc(-50% + 0px), calc(-50% + 110px))",
            },
            height: {
              xs: window.innerHeight > 700 ? 150 : 110,
              lg: 220,
              xl: 320,
            },
            filter:
              "drop-shadow(0 0 24px rgba(255,255,180,0.6)) drop-shadow(0 0 48px rgba(255,255,180,0.3))",
          }}
        />
      </Box>
    </>
  );
};

export default Banner;
