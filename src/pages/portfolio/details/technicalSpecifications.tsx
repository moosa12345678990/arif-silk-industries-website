export default function TechnicalSpecifications() {
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
            <td className="p-3">Poly Satin (100% Polyester)</td>
          </tr>

          <tr className="border-t">
            <th className="bg-gray-50 text-left font-medium p-3">
              GSM
            </th>
            <td className="p-3">80–120 GSM</td>
          </tr>

          <tr className="border-t">
            <th className="bg-gray-50 text-left font-medium p-3">
              Texture
            </th>
            <td className="p-3">Smooth, glossy, soft</td>
          </tr>

          <tr className="border-t">
            <th className="bg-gray-50 text-left font-medium p-3">
              Width
            </th>
            <td className="p-3">(Usually 54” / 58” / 60” or add your own)</td>
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
