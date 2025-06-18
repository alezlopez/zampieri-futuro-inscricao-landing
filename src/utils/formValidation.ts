
export interface RegistrationFormData {
  responsibleName: string;
  phone: string;
  email: string;
  cpf: string;
  studentName: string;
  grade: string;
  timePreference: string;
  currentlyStudies: string;
  previouslyStudied: string;
  currentSchool: string;
  privacyConsent: string;
  contactConsent: string;
}

export const validateForm = (formData: RegistrationFormData) => {
  if (!formData.responsibleName || formData.phone === '+55 ' || !formData.email || !formData.cpf || 
      !formData.studentName || !formData.grade || !formData.timePreference || !formData.currentlyStudies) {
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

  if (formData.privacyConsent !== 'true') {
    return {
      isValid: false,
      error: {
        title: "Consentimento obrigatório",
        description: "É necessário concordar com a política de privacidade para prosseguir."
      }
    };
  }

  if (formData.contactConsent !== 'true') {
    return {
      isValid: false,
      error: {
        title: "Autorização obrigatória",
        description: "É necessário autorizar o contato da escola para prosseguir."
      }
    };
  }

  return { isValid: true };
};

export const getInitialFormData = (): RegistrationFormData => ({
  responsibleName: '',
  phone: '+55 ',
  email: '',
  cpf: '',
  studentName: '',
  grade: '',
  timePreference: '',
  currentlyStudies: '',
  previouslyStudied: '',
  currentSchool: '',
  privacyConsent: 'false',
  contactConsent: 'false'
});

export const grades = [
  'Pré', '1º Ano', '2º Ano', '3º Ano', '4º Ano', '5º Ano',
  '6º Ano', '7º Ano', '8º Ano', '9º Ano', '1º Médio', '2º Médio', '3º Médio'
];

export const timePreferences = ['Manhã', 'Tarde'];
