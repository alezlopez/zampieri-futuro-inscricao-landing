
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { RegistrationFormData, getInitialFormData } from '@/utils/formValidation';

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitForm = async (formData: RegistrationFormData, setFormData: (data: RegistrationFormData) => void) => {
    setIsSubmitting(true);

    const webhookUrl = 'https://n8n.colegiozampieri.com/webhook/EsperaMatricula';

    try {
      console.log('Enviando dados para o webhook:', formData);
      
      // Primeira tentativa: JSON com CORS
      try {
        console.log('Tentando envio via JSON...');
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          mode: 'cors',
          body: JSON.stringify(formData),
        });
        
        console.log('Resposta da tentativa JSON:', response.status);
        
        if (response.ok) {
          console.log('Formulário enviado com sucesso via JSON');
          
          toast({
            title: "Cadastro enviado!",
            description: "Seu cadastro foi enviado com sucesso. Você receberá informações sobre vagas e valores promocionais em primeira mão.",
          });

          setFormData(getInitialFormData());
          return;
        }
      } catch (jsonError) {
        console.log('Falha no envio JSON, tentando FormData:', jsonError);
      }

      // Segunda tentativa: FormData com no-cors
      try {
        console.log('Tentando envio via FormData...');
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formDataToSend.append(key, value);
        });

        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: formDataToSend,
        });
        
        console.log('Dados enviados via FormData');
        
        toast({
          title: "Cadastro enviado!",
          description: "Seu cadastro foi enviado com sucesso. Você receberá informações sobre vagas e valores promocionais em primeira mão.",
        });

        setFormData(getInitialFormData());
        return;
      } catch (formDataError) {
        console.log('Falha no envio FormData, tentando URL encoded:', formDataError);
      }

      // Terceira tentativa: URL encoded
      try {
        console.log('Tentando envio via URL encoded...');
        const urlEncodedData = new URLSearchParams();
        Object.entries(formData).forEach(([key, value]) => {
          urlEncodedData.append(key, value);
        });

        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          mode: 'no-cors',
          body: urlEncodedData.toString(),
        });

        console.log('Dados enviados via URL encoded');
        
        toast({
          title: "Cadastro enviado!",
          description: "Seu cadastro foi enviado com sucesso. Você receberá informações sobre vagas e valores promocionais em primeira mão.",
        });

        setFormData(getInitialFormData());
        return;
      } catch (urlError) {
        console.log('Falha no envio URL encoded:', urlError);
      }

      // Se todas as tentativas falharam
      throw new Error('Todas as tentativas de envio falharam');

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      
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
