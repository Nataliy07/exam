; (function ($) {

    $(document).ready(function () {
        $(function () {
            $('.slider').slick({
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        });
        $(function () {
            $('.slider1').slick({

                autoplay: true,
                autoplaypeed: 400,
                dots: true,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        });

        (function () {
            var blocks = document.querySelectorAll(".r1");

            for (var i = 0; i < blocks.length; i++) {
                blocks[i].addEventListener("click", function () {
                    for (var j = 0; j < blocks.length; j++) {
                        blocks[j].classList.remove("active");
                    }

                    this.classList.add("active");
                }, false);
            }
        })();


        $('form').on('submit', function (e) {
            e.preventDefault();
        });
        MyBtn.onclick = function () {
            myModal.style.display = "block";
        };
        Close.onclick = function () {
            myModal.style.display = "none";
        };


        $(document).ready(function () {
            $("nav a").click(function () {
                elementClick = $(this).attr("href");
                destination = $(elementClick).offset().top; $("body,html").animate({ scrollTop: destination }, 800);
            });
        });
        $(document).ready(function () {
            $(".scroll a").click(function () {
                elementClick = $(this).attr("href");
                destination = $(elementClick).offset().top; $("body,html").animate({ scrollTop: destination }, 800);
            });
        });

        function say_hi() {
            var fname = document.getElementById('email').value;
            console.log(fname);
        }
        document.getElementById('suBmit').addEventListener('click', say_hi);

        var input = document.getElementById('email').value;
        input.onblur = function () {
            if (!input.value.includes('@')) {
                input.classList.add('invalid');
            }
        };

        input.onfocus = function () {
            if (this.classList.contains('invalid')) {
                this.classList.remove('invalid');
                error.innerHTML = "";
            }
        };







    });
})(jQuery);


