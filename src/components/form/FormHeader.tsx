
import React from 'react';
import { CardHeader, CardTitle } from "@/components/ui/card";

const FormHeader = () => {
  return (
    <CardHeader className="bg-gradient-to-r from-green-700 to-green-800 text-white rounded-t-lg">
      <CardTitle className="text-2xl text-center">
        Lista de Espera - Matrículas 2026
      </CardTitle>
      <p className="text-center text-green-100">
        Cadastre-se e receba informações privilegiadas sobre vagas e valores promocionais
      </p>
    </CardHeader>
  );
};

export default FormHeader;
