
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    responsibleName: '',
    phone: '+55 ',
    cpf: '',
    studentName: '',
    grade: '',
    currentlyStudies: '',
    previouslyStudied: '',
    currentSchool: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const formatPhone = (value: string) => {
    // Remove todos os caracteres não numéricos, exceto o +
    const numbers = value.replace(/[^\d+]/g, '');
    
    // Se não começar com +55, adiciona
    if (!numbers.startsWith('+55')) {
      const onlyNumbers = numbers.replace(/\D/g, '');
      if (onlyNumbers.length === 0) {
        return '+55 ';
      }
      return `+55 ${onlyNumbers}`;
    }
    
    // Remove o +55 para formatar apenas os números restantes
    const phoneNumbers = numbers.substring(3);
    
    // Formata: +55 XX XXXXX-XXXX
    if (phoneNumbers.length <= 2) {
      return `+55 ${phoneNumbers}`;
    } else if (phoneNumbers.length <= 7) {
      return `+55 ${phoneNumbers.substring(0, 2)} ${phoneNumbers.substring(2)}`;
    } else {
      return `+55 ${phoneNumbers.substring(0, 2)} ${phoneNumbers.substring(2, 7)}-${phoneNumbers.substring(7, 11)}`;
    }
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const formatted = numbers.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    return formatted.length <= 14 ? formatted : value;
  };

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
    
    // Basic validation
    if (!formData.responsibleName || formData.phone === '+55 ' || !formData.cpf || 
        !formData.studentName || !formData.grade || !formData.currentlyStudies) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    if (formData.currentlyStudies === 'não' && !formData.previouslyStudied) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, informe se já estudou no Zampieri antes.",
        variant: "destructive"
      });
      return;
    }

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

          // Reset form
          setFormData({
            responsibleName: '',
            phone: '+55 ',
            cpf: '',
            studentName: '',
            grade: '',
            currentlyStudies: '',
            previouslyStudied: '',
            currentSchool: ''
          });
          
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

        // Reset form
        setFormData({
          responsibleName: '',
          phone: '+55 ',
          cpf: '',
          studentName: '',
          grade: '',
          currentlyStudies: '',
          previouslyStudied: '',
          currentSchool: ''
        });
        
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

      // Reset form
      setFormData({
        responsibleName: '',
        phone: '+55 ',
        cpf: '',
        studentName: '',
        grade: '',
        currentlyStudies: '',
        previouslyStudied: '',
        currentSchool: ''
      });

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

  const grades = [
    'Pré', '1º Ano', '2º Ano', '3º Ano', '4º Ano', '5º Ano',
    '6º Ano', '7º Ano', '8º Ano', '9º Ano', '1º Médio', '2º Médio', '3º Médio'
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-green-200">
      <CardHeader className="bg-gradient-to-r from-green-700 to-green-800 text-white rounded-t-lg">
        <CardTitle className="text-2xl text-center">
          Lista de Espera - Matrículas 2026
        </CardTitle>
        <p className="text-center text-green-100">
          Cadastre-se e receba informações privilegiadas sobre vagas e valores promocionais
        </p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="responsibleName" className="text-green-800 font-medium">
                Nome do Responsável *
              </Label>
              <Input
                id="responsibleName"
                value={formData.responsibleName}
                onChange={(e) => handleInputChange('responsibleName', e.target.value)}
                placeholder="Nome completo do responsável"
                className="border-green-300 focus:border-green-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-green-800 font-medium">
                Celular *
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+55 11 99999-9999"
                className="border-green-300 focus:border-green-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cpf" className="text-green-800 font-medium">
                CPF *
              </Label>
              <Input
                id="cpf"
                value={formData.cpf}
                onChange={(e) => handleInputChange('cpf', e.target.value)}
                placeholder="123.456.789-10"
                className="border-green-300 focus:border-green-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentName" className="text-green-800 font-medium">
                Nome Completo do Aluno *
              </Label>
              <Input
                id="studentName"
                value={formData.studentName}
                onChange={(e) => handleInputChange('studentName', e.target.value)}
                placeholder="Nome completo do aluno"
                className="border-green-300 focus:border-green-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-green-800 font-medium">Série de Interesse *</Label>
            <Select value={formData.grade} onValueChange={(value) => handleInputChange('grade', value)}>
              <SelectTrigger className="border-green-300 focus:border-green-500">
                <SelectValue placeholder="Selecione a série" />
              </SelectTrigger>
              <SelectContent>
                {grades.map((grade) => (
                  <SelectItem key={grade} value={grade}>
                    {grade}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label className="text-green-800 font-medium">Atualmente estuda no Zampieri? *</Label>
            <RadioGroup
              value={formData.currentlyStudies}
              onValueChange={(value) => handleInputChange('currentlyStudies', value)}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" id="currently-yes" />
                <Label htmlFor="currently-yes">Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="não" id="currently-no" />
                <Label htmlFor="currently-no">Não</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.currentlyStudies === 'não' && (
            <div className="space-y-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="space-y-3">
                <Label className="text-green-800 font-medium">Já estudou no Zampieri antes? *</Label>
                <RadioGroup
                  value={formData.previouslyStudied}
                  onValueChange={(value) => handleInputChange('previouslyStudied', value)}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="previously-yes" />
                    <Label htmlFor="previously-yes">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="não" id="previously-no" />
                    <Label htmlFor="previously-no">Não</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentSchool" className="text-green-800 font-medium">
                  Escola Atual
                </Label>
                <Input
                  id="currentSchool"
                  value={formData.currentSchool}
                  onChange={(e) => handleInputChange('currentSchool', e.target.value)}
                  placeholder="Nome da escola atual"
                  className="border-green-300 focus:border-green-500"
                />
              </div>
            </div>
          )}

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? 'Enviando...' : 'Entrar na Lista de Espera'}
          </Button>
        </form>

        <div className="text-center text-sm text-gray-600 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="font-medium text-yellow-800">
            📅 Matrículas abertas em: <span className="font-bold">01/09/2025</span>
          </p>
          <p className="text-yellow-700 mt-1">
            Quem se cadastrar receberá informações privilegiadas sobre vagas e valores promocionais!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
