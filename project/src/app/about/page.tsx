export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About CricStore</h1>
          <p className="text-xl text-gray-600">
            Your trusted partner in cricket excellence
          </p>
        </div>

        {/* About Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <p className="text-lg text-gray-700">
            Welcome to <span className="font-semibold text-indigo-600">CricStore</span>, your premier destination for high-quality cricket equipment. 
            We are passionate about cricket and committed to providing players at all levels 
            with the finest gear to enhance their performance on the field.
          </p>

          <p className="text-gray-700">
            Founded by cricket enthusiasts, CricStore has been serving the cricket community 
            with authentic, professional-grade equipment from the world’s leading brands. 
            Our catalog includes premium English willow bats, gloves, helmets, shoes, and protective gear 
            that meet international safety standards.
          </p>

          <p className="text-gray-700">
            Whether you're a weekend warrior or a professional player, we support your cricket journey 
            with top-tier products, expert advice, and outstanding customer service.
          </p>

          {/* Contact Section */}
          <div className="border-t pt-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">📞 Get In Touch</h2>
            <p className="text-gray-700 mb-2">
              <strong>🏬 Visit Our Showroom:</strong><br />
              8A 1/1, Stanley Thilakarathne Mawatha, Nugegoda, Sri Lanka
            </p>

            <p className="text-gray-700 mb-2">
              <strong>📞 Contact Numbers:</strong><br />
              Landline: <a href="tel:0112099231" className="text-blue-600 hover:underline">011 209 9231</a><br />
              Mobile: <a href="tel:0777309231" className="text-blue-600 hover:underline">077 730 9231</a>
            </p>

            <p className="text-gray-700">
              <strong>📱 Call / WhatsApp:</strong><br />
              <a href="tel:0770388698" className="text-blue-600 hover:underline">077 038 8698</a><br />
              <a href="tel:0715376981" className="text-blue-600 hover:underline">071 537 6981</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
