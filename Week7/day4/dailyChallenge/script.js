var toggleSubmit = function() {
    var isDisabled = ![].some.call(document.querySelectorAll("input[type=text]"), function(input) {
        return input.value.length;
    });

    var submitBtn = document.querySelector("input[type=submit]");

    if (isDisabled) {
        submitBtn.setAttribute("disabled", "disabled");
    } else {
        submitBtn.removeAttribute("disabled");
    }
};

document.querySelector("form").addEventListener("input", toggleSubmit, false);