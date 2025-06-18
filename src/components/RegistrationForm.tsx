import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatPhone, formatCPF } from '@/utils/formatters';
import { validateForm, getInitialFormData, RegistrationFormData } from '@/utils/formValidation';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { useToast } from "@/hooks/use-toast";
import FormHeader from './form/FormHeader';
import ResponsibleFields from './form/ResponsibleFields';
import StudentFields from './form/StudentFields';
import ZampieriStudyFields from './form/ZampieriStudyFields';
import FormFooter from './form/FormFooter';

const RegistrationForm = () => {
  const [formData, setFormData] = useState<RegistrationFormData>(getInitialFormData());
  const { isSubmitting, submitForm } = useFormSubmission();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;
    
    if (field === 'phone') {
      formattedValue = formatPhone(value);
    } else if (field === 'cpf') {
      formattedValue = formatCPF(value);
    }
    
    setFormData(prev => ({ ...prev, [field]: formattedValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submission started with data:', formData);
    
    const validation = validateForm(formData);
    if (!validation.isValid) {
      toast({
        title: validation.error!.title,
        description: validation.error!.description,
        variant: "destructive"
      });
      return;
    }

    await submitForm(formData, setFormData);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-green-200">
      <FormHeader />
      <CardContent className="p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <ResponsibleFields formData={formData} onInputChange={handleInputChange} />
          <StudentFields formData={formData} onInputChange={handleInputChange} />
          <ZampieriStudyFields formData={formData} onInputChange={handleInputChange} />

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? 'Enviando...' : 'Entrar na Lista de Espera'}
          </Button>
        </form>

        <FormFooter />
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
