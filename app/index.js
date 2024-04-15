$(document).ready(function () {
    function calculate() {
        var creditInputs = $(".credits");
        var gradeInputs = $(".grade");

        var totalCreditPoints = 0;
        var totalGradePoints = 0;
        var GPA = 0;

        for (var i = 0; i < creditInputs.length; i++) {
            var credit = Number(creditInputs[i].value);
            var grade = Number(gradeInputs[i].value);

            totalCreditPoints += credit;
            totalGradePoints += credit * grade;
        }

        if (totalCreditPoints !== 0) {
            GPA = totalGradePoints / totalCreditPoints;
        }

        if (isNaN(GPA)) {
            GPA = 0.0;
        }

        $("#finaljudgement").html(GPA.toFixed(2));
    }

    // Calculate button click event
    $("#calculateBtn").click(function () {
        calculate();
    });

    // Initial calculation on document ready
    calculate();
});
