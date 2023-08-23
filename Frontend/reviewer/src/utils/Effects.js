
export function goToTop() {

    const toTopButton = document.getElementById("to-top-button");
    var rootElement = document.documentElement;

    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            toTopButton.classList.remove("hidden");
        } else {
            toTopButton.classList.add("hidden");
        }
    }
    
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }