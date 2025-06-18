
export interface RegistrationFormData {
  responsibleName: string;
  phone: string;
  cpf: string;
  studentName: string;
  grade: string;
  currentlyStudies: string;
  previouslyStudied: string;
  currentSchool: string;
}

export const validateForm = (formData: RegistrationFormData) => {
  if (!formData.responsibleName || formData.phone === '+55 ' || !formData.cpf || 
      !formData.studentName || !formData.grade || !formData.currentlyStudies) {
    return {
      isValid: false,
      error: {
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios."
      }
    };
  }

  if (formData.currentlyStudies === 'não' && !formData.previouslyStudied) {
    return {
      isValid: false,
      error: {
        title: "Campo obrigatório",
        description: "Por favor, informe se já estudou no Zampieri antes."
      }
    };
  }

  return { isValid: true };
};

export const getInitialFormData = (): RegistrationFormData => ({
  responsibleName: '',
  phone: '+55 ',
  cpf: '',
  studentName: '',
  grade: '',
  currentlyStudies: '',
  previouslyStudied: '',
  currentSchool: ''
});

export const grades = [
  'Pré', '1º Ano', '2º Ano', '3º Ano', '4º Ano', '5º Ano',
  '6º Ano', '7º Ano', '8º Ano', '9º Ano', '1º Médio', '2º Médio', '3º Médio'
];
