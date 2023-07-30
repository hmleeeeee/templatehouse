/* ========== */
/* sample-N1 */
(function () {
  $(function () {
    $(".sample-N1").each(function () {
      const $block = $(this);
      // Mobile Lang
      $block.find(".header-langbtn").on("click", function () {
        $(this).parent().toggleClass("lang-active");
      });
      // Mobile Top
      $block.find(".btn-momenu").on("click", function () {
        $block.addClass("block-active");
      });
      $block.find(".btn-moclose").on("click", function () {
        $block.removeClass("block-active");
      });
      // Mobile Gnb
      $block.find(".header-gnbitem").each(function () {
        const $this = $(this);
        const $thislink = $this.find(".header-gnblink");
        $thislink.on("click", function () {
          if (!$(this).parent().hasClass("item-active")) {
            $(".header-gnbitem").removeClass("item-active");
          }
          $(this).parents(".header-gnbitem").toggleClass("item-active");
        });
      });
      // Full Gnb
      $block.find(".btn-allmenu").on("click", function () {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function () {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // Full Gnb DecoLine
      $block.find(".fullmenu-gnbitem").each(function () {
        const $this = $(this);

        $this.on("mouseover", function () {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function () {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").removeClass("on");
          }
        });
      });
    });
  });
})();

/* ========== */
/* sample-N2 */
(function () {
  $(function () {
    $(".sample-N2").each(function () {
      const $block = $(this);
      // Gnb
      $block.find(".header-center").on("mouseover", function () {
        if (window.innerWidth > 992) {
          $block.addClass("block-active");
        }
      });
      $block.find(".header-center").on("mouseout", function () {
        if (window.innerWidth > 992) {
          $block.removeClass("block-active");
        }
      });
      // Gnb DecoLine
      $block.find(".header-gnbitem").each(function () {
        const $this = $(this);
        $this.on("mouseover", function () {
          if (window.innerWidth > 992) {
            $this.find(".header-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function () {
          if (window.innerWidth > 992) {
            $this.find(".header-gnblink").removeClass("on");
          }
        });
      });
      // Mobile Lang
      $block.find(".header-langbtn").on("click", function () {
        $(this).parent().toggleClass("lang-active");
      });
      // Mobile Top
      $block.find(".btn-momenu").on("click", function () {
        $block.addClass("mo-active");
      });
      $block.find(".btn-moclose").on("click", function () {
        $block.removeClass("mo-active");
      });
      // Mobile Gnb
      $block.find(".header-gnbitem").each(function () {
        const $this = $(this);
        const $thislink = $this.find(".header-gnblink");
        $thislink.on("click", function () {
          if (!$(this).parent().hasClass("item-active")) {
            $(".header-gnbitem").removeClass("item-active");
          }
          $(this).parents(".header-gnbitem").toggleClass("item-active");
          // $(this).parent().toggleClass("item-active");
        });
      });
      // Full Gnb
      $block.find(".btn-allmenu").on("click", function () {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function () {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // Full Gnb DecoLine
      $block.find(".fullmenu-gnbitem").each(function () {
        const $this = $(this);
        $this.on("mouseover", function () {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function () {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").removeClass("on");
          }
        });
      });
    });
  });
})();

/* ========== */
/* sample-N3 */
(function () {
  $(function () {
    $(".sample-N3").each(function () {
      const $block = $(this);
      // Full Gnb
      $block.find(".btn-allmenu").on("click", function () {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function () {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // Full Gnb DecoLine
      $block.find(".fullmenu-gnbitem").each(function () {
        const $this = $(this);
        $this.on("mouseover", function () {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function () {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").removeClass("on");
          }
        });
      });
    });
  });
})();

/* ========== */
/* sample-N6 */
(function () {
  $(function () {
    $(".sample-N6").each(function () {
      const $block = $(this);
      // Banner
      $block.find(".banner-close").on("click", function () {
        $(this).parent().slideUp();
      });
      // Full Gnb
      $block.find(".btn-allmenu").on("click", function () {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function () {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // Full Gnb DecoLine
      $block.find(".fullmenu-gnbitem").each(function () {
        const $this = $(this);

        $this.on("mouseover", function () {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function () {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").removeClass("on");
          }
        });
      });
    });
  });
})();

/* ========== */
/* sample-N7 */
(function () {
  $(function () {
    $(".sample-N7").each(function () {
      const $block = $(this);
      // Full Gnb
      $block.find(".btn-allmenu").on("click", function () {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function () {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // Full Gnb DecoLine
      $block.find(".fullmenu-gnbitem").each(function () {
        const $this = $(this);

        $this.on("mouseover", function () {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function () {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").removeClass("on");
          }
        });
      });
    });
  });
})();

/* ========== */
/* sample-N8 */
(function () {
  $(function () {
    $(".sample-N8").each(function () {
      const $block = $(this);
      // Full Gnb
      $block.find(".btn-allmenu").on("click", function () {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function () {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // Full Gnb DecoLine
      $block.find(".fullmenu-gnbitem").each(function () {
        const $this = $(this);
        $this.on("mouseover", function () {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function () {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").removeClass("on");
          }
        });
      });
    });
  });
})();
