export default function TechnicalShafoon() {
  return (
    <div className="w-full max-w-3xl overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full border-collapse text-sm">
        <caption className="text-left font-semibold p-4 text-base">
          Technical Specifications
        </caption>

        <thead className="hidden">
          <tr>
            <th>Specification</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <th className="bg-gray-50 text-left font-medium p-3 w-1/3">
              Fabric Type
            </th>
            <td className="p-3">Jourjat Shafoon</td>
          </tr>

          <tr className="border-t">
            <th className="bg-gray-50 text-left font-medium p-3">
              GSM
            </th>
            <td className="p-3">70–100  GSM</td>
          </tr>

          <tr className="border-t">
            <th className="bg-gray-50 text-left font-medium p-3">
              Texture
            </th>
            <td className="p-3">Soft fall & elegant drape & Semi-transparent look</td>
          </tr>

          <tr className="border-t">
            <th className="bg-gray-50 text-left font-medium p-3">
              Certifications
            </th>
            <td className="p-3">OEKO-TEX Standard 100 , 	ISO 9001 (Quality Management) ,	Azo-free dyeing</td>
          </tr>

          <tr className="border-t">
            <th className="bg-gray-50 text-left font-medium p-3">
              Weight
            </th>
            <td className="p-3">Lightweight</td>
          </tr>

          <tr className="border-t">
            <th className="bg-gray-50 text-left font-medium p-3">
              Dyeing
            </th>
            <td className="p-3">High-quality colorfast dye</td>
          </tr>

          <tr className="border-t">
            <th className="bg-gray-50 text-left font-medium p-3">
              Feel
            </th>
            <td className="p-3">Silky with a flowing drape</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
