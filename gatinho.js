function showStep(stepNumber) {
    // Esconder todas as etapas
    const steps = document.querySelectorAll('.scene, .letter');
    steps.forEach(step => step.style.display = 'none');
    
    // Mostrar a etapa atual
    const currentStep = document.getElementById(`step${stepNumber}`);
    if (currentStep) {
        currentStep.style.display = 'flex';
    }
}