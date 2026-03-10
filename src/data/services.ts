export type ServicePlan = {
  accountType: string;
  duration: string;
  price: string;
};

export type Service = {
  name: string;
  plans: ServicePlan[];
  note: string;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  services: Service[];
};

export const categories: Category[] = [
  {
    id: "learning",
    name: "Học Tập & Khóa Học",
    icon: "📚",
    services: [
      {
        name: "Duolingo Slot Super",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "425.000 đ" }],
        note: "Nâng cấp qua Add Family. Cung cấp Tên đăng nhập & Mật khẩu.",
      },
      {
        name: "Family Duolingo",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "825.000 đ" }],
        note: "Tài khoản Chính chủ. Thêm tối đa 5 thành viên.",
      },
      {
        name: "Duolingo MAX",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "700.000 đ" }],
        note: "Nâng cấp qua Add Family. Cung cấp Tên đăng nhập & Mật khẩu.",
      },
      {
        name: "Elsa Premium",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "700.000 đ" },
        ],
        note: "Nâng cấp trực tiếp. Tối đa 2 thiết bị.",
      },
      {
        name: "Elsa Pro",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "585.000 đ" }],
        note: "Nâng cấp trực tiếp trên TK chính chủ.",
      },
      {
        name: "Grammarly Edu (Có AI)",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "265.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "3 Tháng", price: "400.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "585.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "595.000 đ" },
        ],
        note: "Gói cao cấp nhất, tích hợp AI. Nâng cấp trực tiếp trên Email.",
      },
      {
        name: "Grammarly Pro (Không AI)",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "225.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "3 Tháng", price: "300.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "355.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "505.000 đ" },
        ],
        note: "Tài khoản cấp sẵn, dùng riêng.",
      },
      {
        name: "Grammarly Pro (Có AI)",
        plans: [{ accountType: "Cấp Sẵn Dùng Chung", duration: "12 Tháng", price: "370.000 đ" }],
        note: "Tài khoản dùng chung. Sử dụng trên 1 thiết bị.",
      },
      {
        name: "Quillbot Premium",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "245.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "12 Tháng", price: "450.000 đ" },
        ],
        note: "Tài khoản dùng chung. Không thay đổi thông tin.",
      },
      {
        name: "Skillshare Premium",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "235.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "375.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "450.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "675.000 đ" },
        ],
        note: "Nâng cấp trên TK Chính chủ. Cung cấp Tên đăng nhập & Mật khẩu.",
      },
      {
        name: "Scribd Premium",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "175.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng tư.",
      },
      {
        name: "Coursera PLUS",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "585.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Năm", price: "795.000 đ" },
        ],
        note: "Nâng cấp trên TK Chính chủ. Chỉ học khóa thuộc gói PLUS.",
      },
      {
        name: "Datacamp Premium",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "275.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "500.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "575.000 đ" },
        ],
        note: "Cung cấp Email Datacamp. Không nhận đăng nhập qua Google.",
      },
      {
        name: "Kahoot Gold (200 người)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "380.000 đ" }],
        note: "Nâng cấp TK Chính chủ. Không hỗ trợ đăng nhập qua Google.",
      },
      {
        name: "Kahoot Silver (100 người)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "275.000 đ" }],
        note: "Nâng cấp TK Chính chủ.",
      },
      {
        name: "Wordwall Pro",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "290.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "755.000 đ" },
        ],
        note: "Nâng cấp trực tiếp trên TK Chính chủ.",
      },
      {
        name: "Quizlet Plus",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "275.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng.",
      },
      {
        name: "Quizlet Unlimited",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "335.000 đ" }],
        note: "Nâng cấp TK Chính chủ (Teacher/Student đồng giá).",
      },
      {
        name: "Turnitin Student",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "200.000 đ" }],
        note: "Nâng cấp trên Email Chính chủ. Tối đa 30 lượt check/ngày.",
      },
      {
        name: "Busuu Premium",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "385.000 đ" }],
        note: "Nâng cấp trên TK Chính chủ. Yêu cầu thanh toán trước.",
      },
      {
        name: "Codecademy Pro",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "300.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "400.000 đ" },
        ],
        note: "Nâng cấp trên TK Chính chủ.",
      },
      {
        name: "Hellochinese Premium",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "690.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "750.000 đ" },
        ],
        note: "Cho phép đổi Mật khẩu, sử dụng tối đa trên 2 thiết bị.",
      },
      {
        name: "Memrise Lifetime",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "850.000 đ" }],
        note: "Acc cấp sẵn hoặc tạo mới qua Email.",
      },
    ],
  },
  {
    id: "ai",
    name: "Công Nghệ & AI",
    icon: "🤖",
    services: [
      {
        name: "ChatGPT Plus",
        plans: [
          { accountType: "Cấp Sẵn (Không BH)", duration: "1 Tháng", price: "90.000 đ" },
          { accountType: "Cấp Sẵn (Có BH)", duration: "1 Tháng", price: "100.000 đ" },
          { accountType: "Nâng Cấp Chính chủ (Có BH)", duration: "1 Tháng", price: "120.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "275.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Năm", price: "1.800.000 đ" },
        ],
        note: "Nâng cấp trên TK Chính chủ hoặc cấp sẵn dùng riêng.",
      },
      {
        name: "ChatGPT Pro (Team 5-7 slot)",
        plans: [
          { accountType: "Cấp Sẵn (Không BH)", duration: "1 Tháng", price: "135.000 đ" },
          { accountType: "Cấp Sẵn (Có BH)", duration: "1 Tháng", price: "155.000 đ" },
          { accountType: "Cấp Sẵn + Capcut", duration: "1 Tháng", price: "325.000 đ" },
        ],
        note: "Tài khoản cấp sẵn, dùng chung. Không thay đổi thông tin đăng nhập.",
      },
      {
        name: "Gemini Pro + 2TB Google One",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "190.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "2 Tháng", price: "245.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "265.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "355.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "750.000 đ" },
        ],
        note: "Chỉ cần cung cấp Gmail.",
      },
      {
        name: "Perplexity AI Pro",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "315.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "455.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "575.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "725.000 đ" },
        ],
        note: "Nâng cấp chính chủ. Cung cấp tên đăng nhập và mật khẩu.",
      },
      {
        name: "Claude AI Pro",
        plans: [
          { accountType: "Cấp Sẵn Dùng Chung", duration: "1 Tháng", price: "410.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "3 Tháng", price: "915.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "6 Tháng", price: "1.770.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "1 Năm", price: "3.100.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "600.000 đ" },
        ],
        note: "Cấp TK dùng riêng hoặc nâng cấp chính chủ.",
      },
      {
        name: "Super Grok",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "465.000 đ" }],
        note: "Nâng cấp trên TK Chính chủ.",
      },
      {
        name: "Copilot Pro + Office 365",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "165.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "265.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "365.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "485.000 đ" },
        ],
        note: "Nhận TK tạo sẵn hoặc nâng cấp trên TK hiện tại.",
      },
      {
        name: "Cursor AI Pro",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "405.000 đ" }],
        note: "Tài khoản tạo sẵn, dùng riêng. Không bật Usage-Based Spend.",
      },
      {
        name: "Github Copilot Pro",
        plans: [
          { accountType: "Cấp Sẵn Dùng Chung", duration: "1 Tháng", price: "305.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "6 Tháng", price: "1.005.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "1 Năm", price: "1.870.000 đ" },
        ],
        note: "Tài khoản cấp sẵn.",
      },
      {
        name: "Midjourney Basic (10$)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "320.000 đ" }],
        note: "Nâng cấp TK Chính chủ hoặc cấp sẵn dùng riêng.",
      },
      {
        name: "Midjourney Standard (30$)",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "755.000 đ" },
          { accountType: "Cấp Sẵn Share Slot", duration: "1 Tháng", price: "405.000 đ" },
        ],
        note: "Nâng cấp chính chủ hoặc dùng chung với server riêng.",
      },
      {
        name: "Kling AI Standard",
        plans: [
          { accountType: "828 credit", duration: "1 Tháng", price: "255.000 đ" },
          { accountType: "1156 credit", duration: "1 Tháng", price: "305.000 đ" },
          { accountType: "6100 credit + Capcut", duration: "1 Tháng", price: "855.000 đ" },
        ],
        note: "Tài khoản cấp sẵn, dùng riêng. Bảo hành Fulltime.",
      },
      {
        name: "VEO3",
        plans: [
          { accountType: "Nâng Cấp 1000 credit", duration: "1 Tháng", price: "185.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung 45K credit", duration: "1 Tháng", price: "305.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng 45K credit", duration: "1 Tháng", price: "395.000 đ" },
        ],
        note: "Cấp tài khoản, dùng riêng tư.",
      },
      {
        name: "KREA AI",
        plans: [
          { accountType: "Basic (9$)", duration: "1 Tháng", price: "305.000 đ" },
          { accountType: "Pro (35$)", duration: "1 Tháng", price: "555.000 đ" },
        ],
        note: "Nâng cấp chính chủ hoặc cấp sẵn dùng riêng.",
      },
      {
        name: "ElevenLabs Creator",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "315.000 đ" }],
        note: "Nâng cấp TK Chính chủ hoặc cấp sẵn. Bảo hành 3 tháng.",
      },
      {
        name: "Heygen Creator (29$)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "595.000 đ" }],
        note: "Nâng cấp TK Chính chủ hoặc cấp sẵn dùng riêng.",
      },
      {
        name: "Runway AI",
        plans: [
          { accountType: "Standard", duration: "1 Tháng", price: "305.000 đ" },
          { accountType: "Pro", duration: "1 Tháng", price: "505.000 đ" },
        ],
        note: "Tài khoản cấp sẵn, dùng riêng tư.",
      },
      {
        name: "SUNO AI Premier (30$)",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "1.270.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "1 Tháng", price: "405.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "3 Tháng", price: "905.000 đ" },
        ],
        note: "Tài khoản cấp sẵn, dùng riêng tư.",
      },
      {
        name: "Hailuo AI",
        plans: [
          { accountType: "Standard (10$)", duration: "1 Tháng", price: "285.000 đ" },
          { accountType: "Pro (35$)", duration: "1 Tháng", price: "500.000 đ" },
        ],
        note: "Tài khoản cấp sẵn. Không thay đổi thông tin.",
      },
      {
        name: "Notion Plus + AI",
        plans: [{ accountType: "Gói AI", duration: "1 Tháng", price: "175.000 đ" }],
        note: "Nâng cấp trên TK Chính chủ. Cung cấp Email đăng nhập.",
      },
    ],
  },
  {
    id: "entertainment",
    name: "Giải Trí",
    icon: "🎬",
    services: [
      {
        name: "Netflix 4K Ultra HD",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "105.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "2 Tháng", price: "215.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "3 Tháng", price: "270.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "395.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "805.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "1 Tháng", price: "85.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "3 Tháng", price: "215.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "12 Tháng", price: "575.000 đ" },
        ],
        note: "Cấp 1 Profile (Mã PIN khách tự đặt). KHÔNG đổi Mật khẩu.",
      },
      {
        name: "Youtube Premium",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "85.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "170.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "235.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "420.000 đ" },
        ],
        note: "Nâng cấp chính chủ. Chỉ hỗ trợ sử dụng tại Việt Nam.",
      },
      {
        name: "Youtube Premium + Gemini Pro",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "785.000 đ" }],
        note: "Combo 2 trong 1.",
      },
      {
        name: "Spotify Premium",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "120.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "185.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "285.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "370.000 đ" },
        ],
        note: "Nâng cấp trực tiếp trên tài khoản khách.",
      },
      {
        name: "Tidal",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "425.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "620.000 đ" },
        ],
        note: "Nâng cấp trực tiếp trên TK Chính Chủ.",
      },
      {
        name: "FPT Play SMax Premium",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "165.000 đ" }],
        note: "Cung cấp số điện thoại đăng nhập FPT Play.",
      },
      {
        name: "VieON VIP (Slot)",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "154.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "3 Tháng", price: "195.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "255.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "335.000 đ" },
        ],
        note: "Tài khoản tạo sẵn, sử dụng 1 kênh riêng.",
      },
      {
        name: "VieON HBO (Slot)",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "120.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "3 Tháng", price: "255.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "6 Tháng", price: "295.000 đ" },
        ],
        note: "Tài khoản tạo sẵn, nội dung HBO độc quyền.",
      },
      {
        name: "Tinder Gold",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "385.000 đ" }],
        note: "Cung cấp SĐT đăng nhập Tinder. Đăng xuất trước khi nâng cấp.",
      },
      {
        name: "Tinder Platinum",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "505.000 đ" }],
        note: "Cung cấp SĐT đăng nhập Tinder.",
      },
      {
        name: "Bumble Premium",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "295.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "395.000 đ" },
        ],
        note: "Nâng cấp chính chủ.",
      },
      {
        name: "VTVCab ON",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "295.000 đ" }],
        note: "Nâng cấp trên SĐT chính chủ. Sử dụng tối đa 5 Tivi.",
      },
    ],
  },
  {
    id: "work",
    name: "Phục Vụ Công Việc",
    icon: "💼",
    services: [
      {
        name: "Office 365 (Slot)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Năm", price: "165.000 đ" }],
        note: "Thêm vào nhóm gia đình. Check mail tham gia.",
      },
      {
        name: "Office 365 Personal",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Năm", price: "405.000 đ" }],
        note: "Nâng cấp chính chủ, pay thẳng 1 năm.",
      },
      {
        name: "Family Office 365 (5 thành viên)",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Năm", price: "455.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng, không đổi pass.",
      },
      {
        name: "Office 365 + 1TB OneDrive",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "255.000 đ" }],
        note: "Chỉ cần cung cấp email. Bấm tham gia nhóm.",
      },
      {
        name: "Zoom Pro 100 người",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "125.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "215.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "385.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "595.000 đ" },
        ],
        note: "Không thay đổi mật khẩu trong quá trình đăng ký.",
      },
      {
        name: "Zoom Pro 300 người",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "365.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "855.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "2.975.000 đ" },
        ],
        note: "Chỉ cần cung cấp email. Nhận email mời nâng cấp.",
      },
      {
        name: "Gamma Plus",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "165.000 đ" }],
        note: "Nâng cấp trực tiếp trên TK chính chủ.",
      },
      {
        name: "Gamma Pro",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "225.000 đ" }],
        note: "Nâng cấp trực tiếp trên TK chính chủ.",
      },
      {
        name: "Linkedin Business Premium",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "565.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "1.978.000 đ" },
        ],
        note: "Nâng cấp chính chủ hoặc qua Redeem Link.",
      },
      {
        name: "Linkedin Career",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "734.000 đ" }],
        note: "Nâng cấp chính chủ.",
      },
      {
        name: "Leetcode Premium (35$)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "605.000 đ" }],
        note: "Nâng cấp chính chủ. Cung cấp tên đăng nhập & mật khẩu.",
      },
      {
        name: "Jetbrains Edu",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "335.000 đ" }],
        note: "Cung cấp email đăng nhập và mật khẩu.",
      },
      {
        name: "Google Meet",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "305.000 đ" }],
        note: "Nâng cấp trực tiếp. Không nhận chính chủ.",
      },
      {
        name: "Camscanner Premium",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "375.000 đ" }],
        note: "Nâng cấp trực tiếp trên tài khoản.",
      },
    ],
  },
  {
    id: "storage",
    name: "Dung Lượng",
    icon: "☁️",
    services: [
      {
        name: "Google One 100GB (Slot)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "255.000 đ" }],
        note: "Mời tham gia Family. Mỗi email chỉ dùng Youtube hoặc Google One.",
      },
      {
        name: "Google One 200GB (Slot)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "510.000 đ" }],
        note: "Mời tham gia Family.",
      },
      {
        name: "Google One 2TB (Slot)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "1.385.000 đ" }],
        note: "Mời tham gia Family.",
      },
      {
        name: "Google One 5TB (Slot)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "1.585.000 đ" }],
        note: "Mời tham gia Family.",
      },
      {
        name: "Google One Fam 2TB",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "935.000 đ" }],
        note: "Tài khoản Family cấp sẵn, thêm 5 thành viên.",
      },
      {
        name: "Google One Fam 5TB",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "1.755.000 đ" }],
        note: "Tài khoản Family cấp sẵn, thêm 5 thành viên.",
      },
      {
        name: "OneDrive 1TB",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Năm", price: "855.000 đ" }],
        note: "Cung cấp email. Tham gia nhóm Office 365.",
      },
      {
        name: "Dropbox 10TB",
        plans: [{ accountType: "Chính chủ", duration: "1 Năm", price: "1.705.000 đ" }],
        note: "Gửi tài khoản bên mình nâng cấp.",
      },
      {
        name: "iCloud 400GB",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "439.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "6 Tháng", price: "885.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "1.885.000 đ" },
        ],
        note: "Cung cấp mail iCloud. Gửi lời mời tham gia Family.",
      },
      {
        name: "iCloud 800GB",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "2.355.000 đ" }],
        note: "Cung cấp mail iCloud.",
      },
    ],
  },
  {
    id: "design",
    name: "Đồ Họa",
    icon: "🎨",
    services: [
      {
        name: "Canva Edu",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Năm", price: "70.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "2 Năm", price: "110.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Năm", price: "130.000 đ" },
        ],
        note: "Chỉ cung cấp email. Thiết kế riêng tư.",
      },
      {
        name: "Canva Pro",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Năm", price: "100.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Năm", price: "200.000 đ" },
        ],
        note: "Cung cấp email. Có thêm Font, Brand Kit. Gói ổn định.",
      },
      {
        name: "Adobe Full App (1 thiết bị)",
        plans: [
          { accountType: "Cấp Sẵn", duration: "1 Tháng", price: "170.000 đ" },
          { accountType: "Cấp Sẵn", duration: "3 Tháng", price: "230.000 đ" },
          { accountType: "Cấp Sẵn", duration: "12 Tháng", price: "615.000 đ" },
        ],
        note: "Ổn định, không lỗi. Login qua UltraViewer. Bao gồm 250 Credit.",
      },
      {
        name: "Adobe Full App (2 thiết bị)",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "1.000.000 đ" }],
        note: "Login qua UltraViewer.",
      },
      {
        name: "Capcut Pro",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "7 Ngày", price: "40.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "14 Ngày", price: "55.000 đ" },
          { accountType: "Cấp Sẵn (1 thiết bị)", duration: "28 Ngày", price: "70.000 đ" },
          { accountType: "Cấp Sẵn (2 thiết bị)", duration: "28 Ngày", price: "90.000 đ" },
          { accountType: "Cấp Sẵn (1 thiết bị)", duration: "6 Tháng", price: "315.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "950.000 đ" },
        ],
        note: "Không đổi email. Gỡ cài đặt và tải lại trước khi đăng nhập.",
      },
      {
        name: "Figma Professional Edu",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "365.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng tư.",
      },
      {
        name: "Figma Pro Full Seat",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "235.000 đ" }],
        note: "Nâng cấp chính chủ. Cung cấp tên đăng nhập & mật khẩu.",
      },
      {
        name: "Filmora 12/13",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "375.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "36 Tháng", price: "510.000 đ" },
        ],
        note: "Đăng nhập qua Google.",
      },
      {
        name: "Lightroom Mobile",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "965.000 đ" }],
        note: "Nâng cấp trực tiếp. Kích hoạt có thể mất thời gian.",
      },
      {
        name: "Picsart Plus",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "355.000 đ" }],
        note: "Nâng cấp trực tiếp trên TK khách hàng.",
      },
      {
        name: "Picsart Pro",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "1 Tháng", price: "55.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "420.000 đ" },
        ],
        note: "Nâng cấp trực tiếp trên TK khách hàng.",
      },
      {
        name: "Autocad",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "265.000 đ" }],
        note: "Cung cấp email. Thêm vào Team.",
      },
      {
        name: "Autodesk Full App",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "415.000 đ" }],
        note: "Cung cấp email.",
      },
      {
        name: "Corel 2024 (1 máy)",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "605.000 đ" }],
        note: "Cài đặt qua UltraViewer. Bảo hành Fulltime.",
      },
      {
        name: "Beautiful.ai Edu",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "275.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng tư.",
      },
      {
        name: "SketchUP Edu",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "415.000 đ" }],
        note: "Chỉ sử dụng phiên bản Website, không hỗ trợ APP.",
      },
    ],
  },
  {
    id: "vpn",
    name: "VPN & Bảo Mật",
    icon: "🛡️",
    services: [
      {
        name: "NordVPN 10 thiết bị",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "160.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "3 Tháng", price: "355.000 đ" },
        ],
        note: "Tài khoản cấp sẵn hoặc nâng cấp chính chủ. Được đổi mật khẩu.",
      },
      {
        name: "NordVPN 1 thiết bị",
        plans: [
          { accountType: "Cấp Sẵn Dùng Chung", duration: "6 Tháng", price: "264.000 đ" },
          { accountType: "Cấp Sẵn Dùng Chung", duration: "12 Tháng", price: "284.000 đ" },
        ],
        note: "Tài khoản cấp sẵn. Không thay đổi mật khẩu.",
      },
      {
        name: "Express VPN (8 thiết bị)",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "150.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng. Được đổi mật khẩu.",
      },
      {
        name: "Hotspot Shield Premium",
        plans: [
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "1 Tháng", price: "155.000 đ" },
          { accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "555.000 đ" },
        ],
        note: "Tài khoản cấp sẵn, dùng riêng tư.",
      },
      {
        name: "PIA VPN",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "665.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng tư.",
      },
      {
        name: "HMA VPN 5 thiết bị",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "525.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng. Hỗ trợ iOS.",
      },
      {
        name: "Kaspersky Premium",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "365.000 đ" }],
        note: "Add mail chính chủ để kích hoạt.",
      },
      {
        name: "Kaspersky VPN",
        plans: [{ accountType: "Cấp Sẵn Dùng Riêng", duration: "12 Tháng", price: "325.000 đ" }],
        note: "Tài khoản cấp sẵn, dùng riêng.",
      },
      {
        name: "LastPass Cá nhân",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "555.000 đ" }],
        note: "Nâng cấp chính chủ hoặc cấp tài khoản dùng riêng.",
      },
      {
        name: "1Password",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "24 Tháng", price: "625.000 đ" }],
        note: "Nâng cấp chính chủ hoặc cấp TK dùng riêng.",
      },
      {
        name: "Key Win 10/11 Pro Retail",
        plans: [{ accountType: "Cấp Key Dùng Riêng", duration: "Vĩnh viễn", price: "Liên hệ" }],
        note: "Key bán lẻ, có thể tái sử dụng trên máy khác.",
      },
    ],
  },
  {
    id: "other",
    name: "Dịch Vụ Khác",
    icon: "⚡",
    services: [
      {
        name: "Chess Diamond",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "485.000 đ" }],
        note: "Nâng cấp TK Chính chủ. Cung cấp Tên đăng nhập & Mật khẩu.",
      },
      {
        name: "Chess Platinum",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "585.000 đ" }],
        note: "Nâng cấp TK Chính chủ.",
      },
      {
        name: "Telegram Premium",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "Liên hệ" }],
        note: "Nâng cấp TK Chính chủ. Gửi Tên đăng nhập & Mật khẩu.",
      },
      {
        name: "Discord Nitro",
        plans: [{ accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "1.125.000 đ" }],
        note: "Nâng cấp TK Chính chủ.",
      },
      {
        name: "Vietmap Pro",
        plans: [
          { accountType: "Nâng Cấp Chính chủ", duration: "12 Tháng", price: "565.000 đ" },
          { accountType: "Nâng Cấp Chính chủ", duration: "24 Tháng", price: "1.000.000 đ" },
        ],
        note: "Gửi Code kích hoạt. Bảo hành full, hàng chính hãng.",
      },
    ],
  },
];
