import React from "react";
import { Section, LessonHeader, ProblemItem, Box, InputAnswer } from "./ui-lesson";
import { Apple, ShoppingBasket, DivideSquare, Bot, User, UserRound } from "lucide-react";

export default function Lesson25() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <LessonHeader number={25} title="PHÉP CHIA HẾT, PHÉP CHIA CÓ DƯ" />

      <Section type="kham-pha">
        <div className="grid md:grid-cols-2 gap-8">
          <Box className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-4 text-blue-800">a) Phép chia hết</h3>
            <p className="mb-4 text-center">Chia đều 6 quả táo vào 2 rổ.</p>
            <div className="flex gap-4 mb-6">
              <div className="bg-amber-100 p-4 rounded-b-3xl rounded-t-lg border-b-4 border-amber-600 flex gap-1">
                <Apple fill="#ef4444" className="text-red-600" />
                <Apple fill="#ef4444" className="text-red-600" />
                <Apple fill="#ef4444" className="text-red-600" />
              </div>
              <div className="bg-amber-100 p-4 rounded-b-3xl rounded-t-lg border-b-4 border-amber-600 flex gap-1">
                <Apple fill="#ef4444" className="text-red-600" />
                <Apple fill="#ef4444" className="text-red-600" />
                <Apple fill="#ef4444" className="text-red-600" />
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg w-full text-center border border-blue-200">
              <p className="text-2xl font-black mb-2 font-mono">6 : 2 = 3</p>
              <ul className="text-sm text-left list-disc list-inside text-gray-700 mb-2">
                <li>6 chia 2 được 3, viết 3.</li>
                <li>3 nhân 2 bằng 6; 6 trừ 6 bằng 0.</li>
              </ul>
              <div className="text-blue-800 font-medium bg-blue-100 p-2 rounded">
                Ta nói: <strong>6 : 2 là phép chia hết.</strong><br/>
                Đọc là: Sáu chia hai bằng ba.
              </div>
            </div>
          </Box>

          <Box className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-4 text-orange-800">b) Phép chia có dư</h3>
            <p className="mb-4 text-center">Chia 7 quả táo vào 2 rổ, mỗi rổ 3 quả. Dư ra 1 quả.</p>
            <div className="flex gap-4 mb-6 items-end">
              <div className="bg-amber-100 p-4 rounded-b-3xl rounded-t-lg border-b-4 border-amber-600 flex gap-1">
                <Apple fill="#ef4444" className="text-red-600" />
                <Apple fill="#ef4444" className="text-red-600" />
                <Apple fill="#ef4444" className="text-red-600" />
              </div>
              <div className="bg-amber-100 p-4 rounded-b-3xl rounded-t-lg border-b-4 border-amber-600 flex gap-1">
                <Apple fill="#ef4444" className="text-red-600" />
                <Apple fill="#ef4444" className="text-red-600" />
                <Apple fill="#ef4444" className="text-red-600" />
              </div>
              <div className="pb-4">
                <Apple fill="#ef4444" className="text-red-600 size-8" />
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg w-full text-center border border-orange-200">
              <p className="text-2xl font-black mb-2 font-mono">7 : 2 = 3 (dư 1)</p>
              <ul className="text-sm text-left list-disc list-inside text-gray-700 mb-2">
                <li>7 chia 2 được 3, viết 3.</li>
                <li>3 nhân 2 bằng 6; 7 trừ 6 bằng 1.</li>
              </ul>
              <div className="text-orange-900 font-medium bg-orange-100 p-2 rounded">
                Ta nói: <strong>7 : 2 là phép chia có dư</strong>, 3 là thương và 1 là số dư.<br/>
                Chú ý: <span className="text-red-600">Số dư bé hơn số chia.</span>
              </div>
            </div>
          </Box>
        </div>
      </Section>

      <Section type="hoat-dong">
        <div className="space-y-6">
          <ProblemItem number="1">
            <h3 className="font-bold text-gray-800 mb-4">Tính.</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
              <div><span className="font-mono text-lg font-bold w-16 inline-block">15 : 3 =</span> <InputAnswer answer="5" /></div>
              <div><span className="font-mono text-lg font-bold w-16 inline-block">24 : 6 =</span> <InputAnswer answer="4" /></div>
              <div><span className="font-mono text-lg font-bold w-16 inline-block">20 : 5 =</span> <InputAnswer answer="4" /></div>
              <div><span className="font-mono text-lg font-bold w-16 inline-block">32 : 6 =</span> <InputAnswer answer="5" placeholder="th" /> dư <InputAnswer answer="2" placeholder="dư" /></div>
              <div><span className="font-mono text-lg font-bold w-16 inline-block">41 : 8 =</span> <InputAnswer answer="5" placeholder="th" /> dư <InputAnswer answer="1" placeholder="dư" /></div>
              <div><span className="font-mono text-lg font-bold w-16 inline-block">23 : 3 =</span> <InputAnswer answer="7" placeholder="th" /> dư <InputAnswer answer="2" placeholder="dư" /></div>
            </div>
          </ProblemItem>

          <ProblemItem number="2">
            <p className="font-medium text-gray-800 mb-4">
              Cách chia táo của bạn nào cho ta phép chia hết? Cách chia táo của bạn nào cho ta phép chia có dư?
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Box className="bg-blue-50 border-blue-200">
                <div className="flex items-center gap-2 mb-2 font-bold text-blue-700">
                  <Bot /> Rô-bốt
                </div>
                <p>Chia 18 quả táo vào các đĩa, <strong>mỗi đĩa 4 quả</strong>.</p>
                <div className="mt-4"><span className="font-mono font-bold">18 : 4 = </span><InputAnswer answer="4"/> dư <InputAnswer answer="2"/></div>
              </Box>
              <Box className="bg-green-50 border-green-200">
                <div className="flex items-center gap-2 mb-2 font-bold text-green-700">
                  <User /> Bạn Nam
                </div>
                <p>Chia 18 quả táo vào các đĩa, <strong>mỗi đĩa 3 quả</strong>.</p>
                <div className="mt-4"><span className="font-mono font-bold">18 : 3 = </span><InputAnswer answer="6"/></div>
              </Box>
              <Box className="bg-pink-50 border-pink-200">
                <div className="flex items-center gap-2 mb-2 font-bold text-pink-700">
                  <UserRound /> Bạn Nữ
                </div>
                <p>Chia 18 quả táo vào các đĩa, <strong>mỗi đĩa 5 quả</strong>.</p>
                <div className="mt-4"><span className="font-mono font-bold">18 : 5 = </span><InputAnswer answer="3"/> dư <InputAnswer answer="3"/></div>
              </Box>
            </div>
            <div className="mt-4 flex gap-4 items-center flex-wrap">
              <p>Phép chia hết: <select className="border p-2 rounded"><option></option><option>Bạn Nam</option><option>Rô-bốt</option><option>Bạn Nữ</option></select></p>
              <p>Phép chia có dư: <select className="border p-2 rounded"><option></option><option>Rô-bốt và Bạn Nữ</option><option>Chỉ Rô-bốt</option><option>Chỉ Bạn Nữ</option></select></p>
            </div>
          </ProblemItem>
        </div>
      </Section>

      <Section type="luyen-tap">
        <div className="space-y-6">
          <ProblemItem number="1">
            <h3 className="font-bold text-gray-800 mb-4">a) Tính</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Box className="text-center font-mono font-bold text-lg bg-emerald-50 border-emerald-200">
                <div className="text-sm font-sans text-emerald-800 mb-2">Chậu A</div>
                18 : 2 = <InputAnswer answer="9" />
              </Box>
              <Box className="text-center font-mono font-bold text-lg bg-emerald-50 border-emerald-200">
                <div className="text-sm font-sans text-emerald-800 mb-2">Chậu B</div>
                23 : 5 = <InputAnswer answer="4" /> dư <InputAnswer answer="3" />
              </Box>
              <Box className="text-center font-mono font-bold text-lg bg-emerald-50 border-emerald-200">
                <div className="text-sm font-sans text-emerald-800 mb-2">Chậu C</div>
                43 : 7 = <InputAnswer answer="6" /> dư <InputAnswer answer="1" />
              </Box>
              <Box className="text-center font-mono font-bold text-lg bg-emerald-50 border-emerald-200">
                <div className="text-sm font-sans text-emerald-800 mb-2">Chậu D</div>
                17 : 8 = <InputAnswer answer="2" /> dư <InputAnswer answer="1" />
              </Box>
            </div>
            <h3 className="font-bold text-gray-800 my-4">b) Chậu cây nào ở câu a ghi phép chia có số dư là 3?</h3>
            <div className="flex gap-4">
              {['A', 'B', 'C', 'D'].map(v => (
                <label key={v} className="flex flex-col items-center gap-1 cursor-pointer">
                  <input type="radio" name="cau-1b" value={v} className="w-5 h-5 accent-green-600" />
                  <span>Chậu {v}</span>
                </label>
              ))}
            </div>
          </ProblemItem>

          <ProblemItem number="2">
            <h3 className="font-bold text-gray-800 mb-4">Tìm số dư của mỗi phép chia dưới đây.</h3>
            <div className="flex flex-wrap gap-4">
              {["17 : 2", "41 : 6", "19 : 7", "19 : 5", "34 : 6", "16 : 6"].map(p => (
                <div key={p} className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-200 shadow-sm">
                  <span className="font-mono font-bold">{p}</span>
                  <span className="text-indigo-400">→</span>
                  <select className="bg-white border border-indigo-200 rounded px-2 py-1 outline-none text-sm font-bold text-indigo-700">
                    <option value="">Khớp số dư...</option>
                    <option>Dư 1</option>
                    <option>Dư 4</option>
                    <option>Dư 5</option>
                  </select>
                </div>
              ))}
            </div>
          </ProblemItem>

          <ProblemItem number="3">
            <h3 className="font-bold text-gray-800 mb-2">Giải toán</h3>
            <p className="text-gray-700 mb-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200 shadow-sm">
              Rô-bốt chia <strong>56 con cá</strong> vào các rổ, <strong>mỗi rổ 8 con cá</strong>.
              Hỏi Rô-bốt chia được bao nhiêu rổ cá như vậy?
            </p>
            <div className="flex items-center gap-4">
              <span className="font-medium text-gray-700">Phép tính:</span>
              <div className="font-mono font-bold text-xl flex items-center gap-2">
                56 : 8 = <InputAnswer answer="7" /> (rổ)
              </div>
            </div>
          </ProblemItem>
        </div>
      </Section>
    </div>
  );
}
