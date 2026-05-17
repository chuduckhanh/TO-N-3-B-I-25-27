import React from "react";
import { Section, LessonHeader, ProblemItem, Box, InputAnswer } from "./ui-lesson";
import { User, UserRound } from "lucide-react";

export default function Lesson26() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <LessonHeader number={26} title="CHIA SỐ CÓ HAI CHỮ SỐ CHO SỐ CÓ MỘT CHỮ SỐ" />

      <Section type="kham-pha">
        <div className="space-y-8">
          <Box className="bg-amber-50 border-amber-200">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600"><UserRound size={28}/></div>
                  <p className="text-lg">Có <strong>48 quả cà chua</strong>.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><User size={28}/></div>
                  <p className="text-lg">Chia đều 48 quả cà chua vào <strong>2 khay</strong>. Hỏi mỗi khay có bao nhiêu quả cà chua?</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-full md:w-64 font-mono">
                <div className="text-2xl font-bold bg-amber-100 text-center py-2 rounded-lg mb-4 text-amber-900 border border-amber-300">
                  48 : 2 = ?
                </div>
                <div className="text-sm space-y-2 text-gray-700">
                  <p>• 4 chia 2 được 2, viết 2.</p>
                  <p className="pl-3">2 nhân 2 bằng 4; 4 trừ 4 bằng 0.</p>
                  <p>• Hạ 8; 8 chia 2 được 4, viết 4.</p>
                  <p className="pl-3">4 nhân 2 bằng 8; 8 trừ 8 bằng 0.</p>
                </div>
                <div className="mt-4 pt-2 border-t border-gray-200 text-center text-xl font-bold text-green-700">
                  48 : 2 = 24
                </div>
              </div>
            </div>
          </Box>

          <div className="grid md:grid-cols-2 gap-8">
            <Box className="bg-blue-50 border-blue-200">
              <h3 className="font-bold text-lg mb-4 text-blue-800 text-center">a) 51 : 3 = ?</h3>
              <div className="bg-white p-4 rounded-lg font-mono text-sm space-y-2 text-gray-700 border border-blue-100 h-40">
                <p>• 5 chia 3 được 1, viết 1.<br/>
                   <span className="pl-3">1 nhân 3 bằng 3; 5 trừ 3 bằng 2.</span></p>
                <p>• Hạ 1, được 21; 21 chia 3 được 7, viết 7.<br/>
                   <span className="pl-3">7 nhân 3 bằng 21; 21 trừ 21 bằng 0.</span></p>
              </div>
              <div className="mt-4 text-center font-mono text-xl font-bold text-blue-900">
                51 : 3 = 17
              </div>
            </Box>

            <Box className="bg-orange-50 border-orange-200">
              <h3 className="font-bold text-lg mb-4 text-orange-800 text-center">b) 74 : 3 = ?</h3>
              <div className="bg-white p-4 rounded-lg font-mono text-sm space-y-2 text-gray-700 border border-orange-100 h-40">
                <p>• 7 chia 3 được 2, viết 2.<br/>
                   <span className="pl-3">2 nhân 3 bằng 6; 7 trừ 6 bằng 1.</span></p>
                <p>• Hạ 4, được 14; 14 chia 3 được 4, viết 4.<br/>
                   <span className="pl-3">4 nhân 3 bằng 12; 14 trừ 12 bằng 2.</span></p>
              </div>
              <div className="mt-4 text-center font-mono text-xl font-bold text-orange-900">
                74 : 3 = 24 (dư 2)
              </div>
            </Box>
          </div>
        </div>
      </Section>

      <Section type="hoat-dong">
        <div className="space-y-6">
          <ProblemItem number="1">
            <h3 className="font-bold text-gray-800 mb-4">Tính.</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 border p-3 rounded-lg flex items-center justify-between font-mono font-bold">
                <span>36 : 3 =</span> <InputAnswer answer="12"/>
              </div>
              <div className="bg-gray-50 border p-3 rounded-lg flex items-center justify-between font-mono font-bold">
                <span>86 : 2 =</span> <InputAnswer answer="43"/>
              </div>
              <div className="bg-gray-50 border p-3 rounded-lg flex items-center justify-between font-mono font-bold">
                <span>48 : 4 =</span> <InputAnswer answer="12"/>
              </div>
              <div className="bg-gray-50 border p-3 rounded-lg flex items-center justify-between font-mono font-bold">
                <span>77 : 7 =</span> <InputAnswer answer="11"/>
              </div>
              <div className="bg-gray-50 border p-3 rounded-lg flex items-center justify-between font-mono font-bold">
                <span>91 : 4 =</span> 
                <span className="text-right text-sm">
                  <InputAnswer answer="22"/> dư <InputAnswer answer="3"/>
                </span>
              </div>
              <div className="bg-gray-50 border p-3 rounded-lg flex items-center justify-between font-mono font-bold">
                <span>53 : 6 =</span>
                <span className="text-right text-sm">
                 <InputAnswer answer="8"/> dư <InputAnswer answer="5"/>
                </span>
              </div>
              <div className="bg-gray-50 border p-3 rounded-lg flex items-center justify-between font-mono font-bold">
                <span>33 : 2 =</span>
                <span className="text-right text-sm">
                 <InputAnswer answer="16"/> dư <InputAnswer answer="1"/>
                </span>
              </div>
              <div className="bg-gray-50 border p-3 rounded-lg flex items-center justify-between font-mono font-bold">
                <span>79 : 5 =</span> 
                <span className="text-right text-sm">
                 <InputAnswer answer="15"/> dư <InputAnswer answer="4"/>
                </span>
              </div>
            </div>
          </ProblemItem>

          <ProblemItem number="2">
            <h3 className="font-bold text-gray-800 mb-4">Tính nhẩm (theo mẫu).</h3>
            <div className="mb-4 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
              <p className="font-bold text-indigo-800 mb-2">Mẫu: 90 : 3 = ?</p>
              <p className="text-indigo-700">Nhẩm: 9 chục : 3 = 3 chục<br/>
                 Vậy: <strong>90 : 3 = 30</strong></p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono font-bold text-lg">
              <div>60 : 2 = <InputAnswer answer="30"/></div>
              <div>80 : 4 = <InputAnswer answer="20"/></div>
              <div>90 : 9 = <InputAnswer answer="10"/></div>
              <div>60 : 3 = <InputAnswer answer="20"/></div>
            </div>
          </ProblemItem>

          <ProblemItem number="3">
            <h3 className="font-bold text-gray-800 mb-4">Tìm thừa số bị thiếu.</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Box className="flex flex-col items-center justify-center gap-2 font-mono font-bold">
                <div>3 × <InputAnswer answer="21"/> = 63</div>
              </Box>
              <Box className="flex flex-col items-center justify-center gap-2 font-mono font-bold">
                <div><InputAnswer answer="11"/> × 5 = 55</div>
              </Box>
              <Box className="flex flex-col items-center justify-center gap-2 font-mono font-bold">
                <div>2 × <InputAnswer answer="21"/> = 42</div>
              </Box>
              <Box className="flex flex-col items-center justify-center gap-2 font-mono font-bold">
                <div><InputAnswer answer="21"/> × 4 = 84</div>
              </Box>
            </div>
          </ProblemItem>

          <ProblemItem number="4">
            <h3 className="font-bold text-gray-800 mb-2">Giải toán</h3>
            <p className="text-gray-700 mb-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200 shadow-sm">
              Bác Hoa mang <strong>75 quả trứng gà</strong> ra chợ bán. Bác chia đều số trứng gà đó vào <strong>3 rổ</strong>. Hỏi mỗi rổ có bao nhiêu quả trứng gà?
            </p>
            <div className="flex items-center gap-4">
              <span className="font-medium text-gray-700">Phép tính:</span>
              <div className="font-mono font-bold text-xl flex items-center gap-2">
                75 : 3 = <InputAnswer answer="25" /> (quả)
              </div>
            </div>
          </ProblemItem>
        </div>
      </Section>

      <Section type="luyen-tap">
        <div className="space-y-6">
          <ProblemItem number="1">
            <h3 className="font-bold text-gray-800 mb-4">Tính.</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono font-bold">
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg text-center">
                77 : 2 = <br className="my-2"/><InputAnswer answer="38" /> dư <InputAnswer answer="1"/>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg text-center">
                97 : 4 = <br className="my-2"/><InputAnswer answer="24" /> dư <InputAnswer answer="1"/>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg text-center">
                51 : 2 = <br className="my-2"/><InputAnswer answer="25" /> dư <InputAnswer answer="1"/>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg text-center">
                98 : 7 = <br className="my-2"/><InputAnswer answer="14" />
              </div>
            </div>
          </ProblemItem>

          <ProblemItem number="2">
            <h3 className="font-bold text-gray-800 mb-4">Số ?</h3>
            <p className="mb-4 text-gray-600">Trong hình dưới đây, các con mèo có cân nặng bằng nhau, các con chó và rô-bốt cũng vậy.</p>
            <div className="grid md:grid-cols-3 gap-4 mb-6 text-center">
              <Box className="bg-pink-50 border-pink-200">
                <div className="font-bold text-pink-800 mb-2">Cân 1</div>
                <p>3 con mèo nặng <strong>12 kg</strong>.</p>
              </Box>
              <Box className="bg-blue-50 border-blue-200">
                <div className="font-bold text-blue-800 mb-2">Cân 2</div>
                <p>3 con chó nặng <strong>72 kg</strong>.</p>
              </Box>
              <Box className="bg-indigo-50 border-indigo-200">
                <div className="font-bold text-indigo-800 mb-2">Cân 3</div>
                <p>3 rô-bốt nặng <strong>45 kg</strong>.</p>
              </Box>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-center p-3 border rounded-lg bg-gray-50">
                Mỗi con mèo cân nặng <InputAnswer answer="4" /> kg. (Vì 12 : 3 = 4)
              </div>
              <div className="flex gap-4 items-center p-3 border rounded-lg bg-gray-50">
                Mỗi con chó cân nặng <InputAnswer answer="24" /> kg. (Vì 72 : 3 = 24)
              </div>
              <div className="flex gap-4 items-center p-3 border rounded-lg bg-gray-50">
                Mỗi rô-bốt cân nặng <InputAnswer answer="15" /> kg. (Vì 45 : 3 = 15)
              </div>
            </div>
          </ProblemItem>

          <ProblemItem number="3">
            <h3 className="font-bold text-gray-800 mb-2">Giải toán</h3>
            <p className="text-gray-700 mb-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200 shadow-sm">
              Một lớp học có <strong>29 học sinh</strong>. Mỗi bàn chỉ xếp chỗ ngồi cho <strong>2 học sinh</strong>. Hỏi cần ít nhất bao nhiêu bàn cho lớp học đó?
            </p>
            <div className="space-y-4 font-medium text-gray-700">
              <div className="flex items-center gap-4">
                <span>Ta có:</span>
                <span className="font-mono font-bold bg-white px-3 py-1 border rounded">29 : 2 = 14 (dư 1)</span>
              </div>
              <p>Vậy cần 14 bàn để đủ chỗ cho 28 học sinh, và cần thêm <strong className="text-indigo-600">1 chiếc bàn nữa</strong> cho 1 học sinh còn dư.</p>
              <div className="flex items-center gap-4 border-t pt-4">
                <span>Số bàn ít nhất cần có:</span>
                <div className="font-mono font-bold text-xl flex items-center gap-2">
                  <InputAnswer answer="15" /> (bàn)
                </div>
              </div>
            </div>
          </ProblemItem>

          <ProblemItem number="4">
            <h3 className="font-bold text-gray-800 mb-4">Tìm số bị chia.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono font-bold">
              <Box className="flex justify-center items-center gap-2"><InputAnswer answer="85"/> : 5 = 17</Box>
              <Box className="flex justify-center items-center gap-2"><InputAnswer answer="84"/> : 3 = 28</Box>
              <Box className="flex justify-center items-center gap-2"><InputAnswer answer="60"/> : 4 = 15</Box>
            </div>
          </ProblemItem>
        </div>
      </Section>
    </div>
  );
}
