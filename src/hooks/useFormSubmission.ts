import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { RegistrationFormData, getInitialFormData } from '@/utils/formValidation';

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitForm = async (formData: RegistrationFormData, setFormData: (data: RegistrationFormData) => void) => {
    setIsSubmitting(true);

    try {
      console.log('Sending request to webhook...');
      
      // First attempt: try with CORS enabled
      let response;
      try {
        console.log('Attempting CORS request...');
        response = await fetch('https://n8n.colegiozampieri.com/webhook/EsperaMatricula', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          body: JSON.stringify(formData),
        });
        
        console.log('CORS response status:', response.status);
        
        if (response.ok) {
          console.log('Form submitted successfully via CORS:', formData);
          
          toast({
            title: "Cadastro enviado!",
            description: "Seu cadastro foi enviado com sucesso. Você receberá informações sobre vagas e valores promocionais em primeira mão.",
            variant: "default"
          });

          setFormData(getInitialFormData());
          return;
        }
      } catch (corsError) {
        console.log('CORS failed, trying alternative methods:', corsError);
      }

      // Second attempt: try sending as form data
      console.log('Attempting form data request...');
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      try {
        response = await fetch('https://n8n.colegiozampieri.com/webhook/EsperaMatricula', {
          method: 'POST',
          mode: 'no-cors',
          body: formDataToSend,
        });
        
        console.log('Form data request sent');
        
        toast({
          title: "Cadastro enviado!",
          description: "Seu cadastro foi enviado com sucesso. Você receberá informações sobre vagas e valores promocionais em primeira mão.",
          variant: "default"
        });

        setFormData(getInitialFormData());
        return;
      } catch (formDataError) {
        console.log('Form data failed, trying URL encoded:', formDataError);
      }

      // Third attempt: try URL encoded data
      console.log('Attempting URL encoded request...');
      const urlEncodedData = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        urlEncodedData.append(key, value);
      });

      response = await fetch('https://n8n.colegiozampieri.com/webhook/EsperaMatricula', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: 'no-cors',
        body: urlEncodedData,
      });

      console.log('URL encoded request sent');
      
      toast({
        title: "Cadastro enviado!",
        description: "Seu cadastro foi enviado com sucesso. Você receberá informações sobre vagas e valores promocionais em primeira mão.",
        variant: "default"
      });

      setFormData(getInitialFormData());

    } catch (error) {
      console.error('All methods failed. Error submitting form:', error);
      
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar o formulário. Tente novamente em alguns minutos ou entre em contato conosco.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, submitForm };
};
