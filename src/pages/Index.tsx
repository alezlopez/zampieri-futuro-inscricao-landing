
import ZampieriLogo from "@/components/ZampieriLogo";
import RegistrationForm from "@/components/RegistrationForm";
import { GraduationCap, Star, Users, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-green-700">
        <div className="container mx-auto px-4 py-6">
          <ZampieriLogo className="justify-center md:justify-start" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
              Matrículas 2026
            </h1>
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-6 py-2 rounded-full font-semibold text-lg mb-6">
              🚀 Lista de Espera Exclusiva
            </div>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Seja o primeiro a saber sobre as <strong className="text-green-700">vagas disponíveis</strong> e 
              <strong className="text-red-600"> valores promocionais exclusivos</strong> para 2026
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 transform hover:scale-105 transition-all duration-300">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-2">Excelência</h3>
              <p className="text-sm text-gray-600">Tradição em educação de qualidade</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 transform hover:scale-105 transition-all duration-300">
              <GraduationCap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-2">Metodologia</h3>
              <p className="text-sm text-gray-600">Ensino inovador e personalizado</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 transform hover:scale-105 transition-all duration-300">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-2">Comunidade</h3>
              <p className="text-sm text-gray-600">Ambiente acolhedor e familiar</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 transform hover:scale-105 transition-all duration-300">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-2">Resultados</h3>
              <p className="text-sm text-gray-600">Aprovações e reconhecimento</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-700 to-green-800 text-white p-8 rounded-2xl shadow-2xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Vantagens Exclusivas da Lista de Espera</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1">Prioridade nas Vagas</h4>
                  <p className="text-green-100 text-sm">Acesso antecipado às vagas disponíveis</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <h4 className="font-semibold mb-1">Valores Promocionais</h4>
                  <p className="text-green-100 text-sm">Descontos especiais para quem se cadastrar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <h4 className="font-semibold mb-1">Informações em Primeira Mão</h4>
                  <p className="text-green-100 text-sm">Seja o primeiro a saber de todas as novidades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <RegistrationForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <ZampieriLogo className="justify-center mb-6 text-white" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <p className="text-green-200">📞 (11) 99999-9999</p>
              <p className="text-green-200">📧 contato@colegiozampieri.com.br</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Endereço</h4>
              <p className="text-green-200">Rua das Flores, 123</p>
              <p className="text-green-200">São Paulo - SP</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <p className="text-green-200">@colegiozampieri</p>
              <p className="text-green-200">Facebook | Instagram</p>
            </div>
          </div>
          <div className="border-t border-green-700 pt-6">
            <p className="text-green-200">&copy; 2024 Colégio Zampieri. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
