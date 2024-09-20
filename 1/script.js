document.getElementById('calculate1').addEventListener('click', function() {
    calculateCGPA('semester1Form', 'result1', 21);
});

document.getElementById('calculate2').addEventListener('click', function() {
    calculateCGPA('semester2Form', 'result2', 24.5);
});

document.getElementById('calculate3').addEventListener('click', function() {
    calculateCGPA('semester3Form', 'result3', 24);
});

function calculateCGPA(formId, resultId, totalCredits) {
    const form = document.getElementById(formId);
    const subjects = form.querySelectorAll('select');
    let totalPoints = 0;

    subjects.forEach(subject => {
        const gradeValue = parseFloat(subject.value);
        const credit = parseFloat(subject.getAttribute('data-credit'));
        totalPoints += gradeValue * credit;
    });

    const cgpa = totalPoints / totalCredits;
    document.getElementById(resultId).textContent = `CGPA: ${cgpa.toFixed(2)}`;

    calculateFinalCGPA();
}

function calculateFinalCGPA() {
    const cgpa1 = parseFloat(document.getElementById('result1').textContent.split(': ')[1] || 0);
    const cgpa2 = parseFloat(document.getElementById('result2').textContent.split(': ')[1] || 0);
    const cgpa3 = parseFloat(document.getElementById('result3').textContent.split(': ')[1] || 0);

    if (cgpa1 && cgpa2 && cgpa3) {
        const finalCGPA = (cgpa1 + cgpa2 + cgpa3) / 3;
        document.getElementById('finalCGPA').textContent = `Final CGPA: ${finalCGPA.toFixed(2)}`;
    }
}
