export type Language = 'en' | 'vi';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      competition: 'Competition',
      gapAnalysis: 'Gap Analysis',
      sponsors: 'Sponsors',
    },
    hero: {
      title: 'Advance Fintech Synthesis',
      subtitle: 'Localized AI for Vietnam\'s Financial Future',
      cta: 'Register Now',
      tagline: 'Empowering the Next Gen: Cyberpunk Fintech Innovation',
    },
    sponsors: {
      title: 'Our Sponsors',
      desc: 'We proudly partner with industry leaders who share our vision for Vietnam\'s fintech future.',
      gold: 'Gold Sponsors',
      silver: 'Silver Sponsors',
    },
    learnMore: {
      title: 'Competition Details',
      desc: 'The primary goal is to bridge foundational fintech knowledge with advanced AI for Finance and Banking techniques. Participants must move beyond traditional data and standard global API limitations to create a product ready for professional-level stakeholders.',
      phasesTitle: 'Key Competition Phases',
      phase1Title: 'Phase 1: AI-Driven Financial Intelligence',
      phase1Items: [
        { text: 'Alternative Data: Use AI to collect and analyze non-traditional data (e.g., social media sentiment, satellite imagery, web-scraped retail trends, or mobile usage)' },
        { text: 'Improved Service Logic: Demonstrate how this data enhances core functions like credit scoring, fraud detection, or personalized investment advice' },
      ],
      phase2Title: 'Phase 2: Custom API Infrastructure',
      phase2Items: [
        { text: 'Proprietary OpenAPI Servers: Develop a custom backend to resolve the limitations of global providers (like Stripe or Plaid), specifically regarding non-Vietnamese currency issues' },
        { text: 'Localized Processing: Ensure the system acts as a central logic hub where transactions and local balances are displayed accurately for the target market' },
      ],
      phase3Title: 'Phase 3: Agentic Automation & Interaction',
      phase3Items: [
        { text: 'Advanced Chatbots: Integrate the Gemini API to move from simple chat to functional account management' },
        { text: 'Natural Language Transactions: Enable users to execute actual transactions or query AI-derived insights through natural language commands' },
      ],
      evaluationTitle: 'Evaluation Criteria',
      submissionsTitle: 'Required Submissions',
    },
    register: {
      title: 'Register Now',
      desc: 'Join AFS 2026 and showcase your fintech innovation. Complete the registration form below.',
    },
    teams: {
      title: 'Registered Teams',
      desc: 'View all teams registered for AFS 2026. The competition is heating up!',
      teamName: 'Team Name',
      teamCaptain: 'Team Captain',
      registrationDate: 'Registration Date',
      status: 'Status',
      confirmed: 'Confirmed',
      pending: 'Pending',
      noTeams: 'No teams registered yet.',
      beFirst: 'Be the first to register your team!',
      totalTeams: 'Total Teams',
      totalParticipants: 'Total Participants',
      loading: 'Loading teams...',
    },
    competition: {
      title: 'Competition Details',
      registration: {
        title: 'Registration',
        desc: 'Open to all Gen-Z innovators. Register your team of 3-5 members.',
        link: 'Register Here',
      },
      eligibility: {
        title: 'Eligibility',
        desc: 'Current university students or young professionals (aged 18-25) with a passion for fintech and AI.',
      },
      dates: {
        title: 'Important Dates',
        items: [
          { date: 'April 15, 2026', event: 'Registration Deadline' },
          { date: 'May 10, 2026', event: 'Preliminary Round' },
          { date: 'June 05, 2026', event: 'Final Demo Day' },
        ],
      },
      prizes: {
        title: 'Prizes',
        items: [
          { rank: '1st Prize', value: '2,000,000 VND + UII Incubator potentials' },
        ],
      },
      guidelines: {
        title: 'Submission Guidelines',
        desc: 'Submit a 5-page PDF report and a functional MVP prototype (deployed link).',
      },
    },
    gapAnalysis: {
      title: 'Fintech Gap Analysis',
      intro: 'Structural Divergence and Strategic Alignment: Vietnam vs. Global Standards.',
      ecosystemTitle: "Vietnam's Fintech Ecosystem: An Overview 🌐",
      ecosystemDesc: "An overview of the Vietnamese Fintech market, from key sectors to prominent players, reveals its dynamism and exceptional growth potential.",
      stats: {
        valuation: 'Fintech Valuation (2025)',
        unbanked: 'Unbanked Population',
        fraud: 'Online Fraud in Finance (2023)',
        internet: 'Internet Penetration',
      },
      gaps: [
        { 
          title: 'Legal Basis', 
          desc: "Vietnam's Decree 13 mandates explicit consent for all data processing, whereas GDPR allows 'legitimate interest' for analytics and fraud prevention, reducing operational friction.",
          details: "A fundamental divergence exists between Vietnam’s personal data protection framework and the EU’s GDPR regarding the lawful basis for processing alternative data. Under the GDPR, organizations can rely on 'legitimate interest' to process data without explicit consent if they can demonstrate that their interests are not overridden by the data subject’s rights. This is frequently used for background analytics, fraud prevention, and credit modeling. In contrast, Vietnam’s Decree 13 and the subsequent Law on Personal Data Protection (LPDP) do not recognize the 'legitimate interest' basis. Instead, they mandate explicit, granular, and voluntary consent as the primary legal basis for almost all processing activities. This requires fintechs to secure permission for specific uses separately, which can create significant friction when integrating diverse alternative data sets for holistic credit scoring."
        },
        { 
          title: 'Digital Identity', 
          desc: "Singapore's Singpass offers instant KYC via the MyInfo API. Vietnam's VNeID is advancing but currently lacks the same level of self-service API access for private fintechs.",
          details: "Singapore’s Singpass system serves as a global benchmark for digital identity, offering a robust developer portal (Singpass Developer & Partner Portal) where fintech startups can access verified government data via the MyInfo API. This allows for instant identity verification, reducing KYC processing times and lowering customer dropout rates by up to 30%. Developers can test applications in a sandbox environment before full rollout. Vietnam’s VNeID has made impressive strides, reaching 67 million accounts and integrating multi-factor biometric authentication. However, its integration with the broader private fintech sector remains in a more controlled, government-centric phase. While major banks and telecom companies use VNeID for onboarding, smaller fintech firms often lack the same level of self-service API access and standardized sandbox testing available in Singapore."
        },
        { 
          title: 'Open Banking', 
          desc: "UK/EU have mature AISP/PISP separation for account-to-account payments. Vietnam is in Phase 1 (basic queries), with payment initiation (PIS) still in the early stages.",
          details: "The UK’s Open Banking Implementation Entity (OBIE) and the EU’s PSD2 have established a mature ecosystem where Account Information Service Providers (AISPs) and Payment Initiation Service Providers (PISPs) are well-regulated and functionally separated. PISPs in the UK enable direct account-to-account payments with instant settlement via Faster Payments. Vietnam is at an earlier stage of this journey, with Circular 64/2024/TT-NHNN coming into effect on March 1, 2025. While the circular mandates Open API adoption for commercial banks, the implementation is phased. Phase 1 focuses on basic information query APIs (balances, transaction history), whereas the orchestration of complex payment initiation and secondary financial services is still emerging."
        },
        { 
          title: 'Agri-Credit', 
          desc: "Global leaders use satellite imagery for 'thin-file' farmers. In Vietnam, high-resolution data for small-scale farms remains prohibitively expensive for most local startups.",
          details: "Global innovators like Apollo Agriculture in Kenya and Dvara in India utilize satellite imagery and remote sensing to evaluate the creditworthiness of smallholder farmers. By triangulating between earth observation data (crop health, yield history) and ground-level behavior, they can provide loans to 'thin-file' clients who lack land titles or formal credit history. In Vietnam, despite the critical role of agriculture, the use of satellite imagery in fintech is not yet mainstreamed. Most agricultural lending still relies on traditional documentation or simpler behavioral proxies from telco usage. Furthermore, a significant technical gap exists in the cost of high-resolution data; while free imagery from missions like Copernicus Sentinel provides basic insights, it often lacks the resolution required for the small farms (less than two acres) that dominate the Vietnamese landscape."
        },
        { 
          title: 'AI Autonomy', 
          desc: "US/Europe are shifting from AI-as-copilot to autonomous agents (e.g., Revolut). Vietnam's AI integration remains largely conversational due to legal uncertainty regarding liability.",
          details: "The fintech industry in the US and Europe is shifting from 'AI-as-copilot' to 'AI-as-agent'—autonomous systems capable of executing complex workflows, such as processing chargebacks or managing cross-border transactions, with minimal human intervention. Revolut and Klarna have pioneered the use of these agents to reduce resolution times and operational costs. Revolut’s early deployment has reportedly reduced resolution times by eight times compared to traditional queues. Vietnamese fintechs, including MoMo and ZaloPay, predominantly use AI for fraud detection, customer service chatbots, and personalized recommendations. However, the move toward autonomous execution—where AI agents move money or execute contracts independently—is hindered by the 'Trust Threshold' and legal uncertainty regarding liability."
        },
        { 
          title: 'Cross-Border', 
          desc: "Global standards use ISO 20022 and SWIFT UETR for end-to-end tracking. Vietnam's full integration is a future goal, leading to reconciliation delays in international transfers.",
          details: "Global benchmarks emphasize the adoption of ISO 20022 and the integration of SWIFT’s Unique End-to-End Transaction Reference (UETR) and Structured Transaction Information (STI) to track payments from origin to destination. In Vietnam, the adoption of these standards is still a work in progress. While Swift has successfully conducted proof-of-concept tests with Vietcombank to carry UETR through the domestic CITAD leg, its full integration across the broader NAPAS instant system is a 'future goal'. This creates a gap where international banks sending funds into Vietnam often lack visibility into how transactions are routed once they enter the domestic system, leading to reconciliation issues and delays."
        },
        { 
          title: 'API Integration', 
          desc: "Global APIs like Stripe/Plaid have limited VND support. Vietnamese startups must build proprietary OpenAPI servers to handle local currency logic and compliance.",
          details: "A major pain point identified for Vietnamese fintechs is the inadequate support for the Vietnamese Dong (VND) within standard global financial APIs like Stripe and Plaid. These platforms were designed primarily for major currency corridors and often struggle with localized requirements, leading to display and processing errors when dealing with non-Vietnamese currencies. This creates a technical gap where Vietnamese startups cannot rely on 'out-of-the-box' global solutions and must instead move beyond simple sandbox integrations to build their own proprietary OpenAPI servers. These custom servers are necessary to handle local application logic and ensure that transactions and balances are processed correctly for the Vietnamese market."
        },
        { 
          title: 'Utility Data', 
          desc: "Singapore's SGFinDex aggregates bank, insurer, and government data. Vietnam lacks a centralized utility data exchange, leaving information siloed between providers.",
          details: "Singapore’s SGFinDex (Singapore Financial Data Exchange) allows individuals to use their digital identity to retrieve personal financial information from participating banks, insurers, and government agencies (like CPF and IRAS) for holistic financial planning. This centralized data exchange ensures that users have a unified view of their financial health, supported by government-backed encryption and consent management. Vietnam currently lacks a centralized utility data exchange of this scale. While the CIC provides a centralized credit registry, it does not aggregate a wide spectrum of utility (electricity, water), insurance, and investment data into a single, user-controlled platform. The Vietnamese market remains fragmented, with data siloed between different ministries and private providers."
        },
        { 
          title: 'Data Sources', 
          desc: "Global bureaus incorporate payroll and rental history. Vietnam is heavily dependent on telco and social footprints, lacking integration of utility billing or patent data.",
          details: "Global credit bureaus are increasingly incorporating a wider range of alternative data, including payroll data, public records on legal proceedings, and even psychometric information. In some jurisdictions, rental history is becoming a standard component of credit scores, provided by platforms that verify consistent and timely payments. In Vietnam, the 'all data is credit data' approach is heavily indexed toward telco behavior, mobile data, and social network footprints. While these are powerful proxies, the ecosystem has yet to fully integrate deeper alternative sets such as centralized utility billing history, patent data for MSMEs, or sophisticated psychometric testing, which are used elsewhere to refine risk prediction and expand credit limits for the underserved."
        },
        { 
          title: 'Regulatory Agility', 
          desc: "Fintech hubs like London/Singapore have high-speed licensing tracks. Vietnam faces 'regulatory lag' with rigorous sandbox approvals for entirely new business models.",
          details: "Mature fintech hubs like London, Singapore, and Hong Kong have established high-speed regulatory tracks and 'Innovation Hubs' to rapidly onboard new technologies. These regions prioritize the quick transition from sandbox testing to full commercial licensing to maintain a competitive edge. Vietnam’s regulatory environment, while improving, is characterized by 'regulatory lag'. The sandbox mechanism under Decree 94 is a significant step, but the approval process remains rigorous, and the lack of a coherent legal approach for entirely new business models (such as decentralized finance or digital assets) can slow down market entry for innovative players."
        },
      ],
    },
  },
  vi: {
    nav: {
      home: 'Trang chủ',
      competition: 'Cuộc thi',
      gapAnalysis: 'Phân tích khoảng cách',
      sponsors: 'Nhà tài trợ',
    },
    hero: {
      title: 'Advance Fintech Synthesis',
      subtitle: 'AI Nội địa hóa cho Tương lai Tài chính Việt Nam',
      cta: 'Đăng ký ngay',
      tagline: 'Trao quyền cho Thế hệ tiếp theo: Đổi mới Fintech Cyberpunk',
    },
    sponsors: {
      title: 'Nhà tài trợ',
      desc: 'Chúng tôi tự hào hợp tác với các nhà lãnh đạo trong ngành chia sẻ tầm nhìn về tương lai fintech Việt Nam.',
      gold: 'Nhà tài trợ Vàng',
      silver: 'Nhà tài trợ Bạc',
    },
    learnMore: {
      title: 'Chi tiết cuộc thi',
      desc: 'Mục tiêu chính là kết nối kiến thức fintech nền tảng với các kỹ thuật AI nâng cao cho Tài chính và Ngân hàng. Thí sinh phải vượt qua dữ liệu truyền thống và hạn chế của API toàn cầu tiêu chuẩn để tạo ra sản phẩm sẵn sàng cho các bên liên quan cấp chuyên nghiệp.',
      phasesTitle: 'Các giai đoạn thi chính',
      phase1Title: 'Giai đoạn 1: Trí tuệ tài chính dựa trên AI',
      phase1Items: [
        { text: 'Dữ liệu thay thế: Sử dụng AI để thu thập và phân tích dữ liệu không truyền thống (ví dụ: tâm lý mạng xã hội, hình ảnh vệ tinh, xu hướng bán lẻ thu thập từ web, hoặc sử dụng di động)' },
        { text: 'Cải thiện logic dịch vụ: Chứng minh cách dữ liệu này nâng cao các chức năng cốt lõi như chấm điểm tín dụng, phát hiện gian lận, hoặc tư vấn đầu tư cá nhân' },
      ],
      phase2Title: 'Giai đoạn 2: Hạ tầng API tùy chỉnh',
      phase2Items: [
        { text: 'Máy chủ OpenAPI độc quyền: Phát triển backend tùy chỉnh để giải quyết các hạn chế của các nhà cung cấp toàn cầu (như Stripe hoặc Plaid), đặc biệt liên quan đến vấn đề tiền tệ không phải Việt Nam' },
        { text: 'Xử lý bản địa: Đảm bảo hệ thống đóng vai trò là trung tâm logic trung tâm nơi giao dịch và số dư cục bộ được hiển thị chính xác cho thị trường mục tiêu' },
      ],
      phase3Title: 'Giai đoạn 3: Tự động hóa Agentic & Tương tác',
      phase3Items: [
        { text: 'Chatbot nâng cao: Tích hợp API Gemini để chuyển từ chat đơn giản sang quản lý tài khoản chức năng' },
        { text: 'Giao dịch ngôn ngữ tự nhiên: Cho phép người dùng thực hiện giao dịch thực tế hoặc truy vấn thông tin chiết xuất từ AI thông qua các lệnh ngôn ngữ tự nhiên' },
      ],
      evaluationTitle: 'Tiêu chí đánh giá',
      submissionsTitle: 'Nội dung nộp bài',
    },
    register: {
      title: 'Đăng ký ngay',
      desc: 'Tham gia AFS 2026 và thể hiện đổi mới fintech của bạn. Hoàn thành form đăng ký bên dưới.',
    },
    teams: {
      title: 'Các đội đã đăng ký',
      desc: 'Xem tất cả các đội đã đăng ký cho AFS 2026. Cuộc thi đang diễn ra!',
      teamName: 'Tên đội',
      teamCaptain: 'Đội trưởng',
      registrationDate: 'Ngày đăng ký',
      status: 'Trạng thái',
      confirmed: 'Đã xác nhận',
      pending: 'Chờ xử lý',
      noTeams: 'Chưa có đội nào đăng ký.',
      beFirst: 'Hãy là người đầu tiên đăng ký đội của bạn!',
      totalTeams: 'Tổng số đội',
      totalParticipants: 'Tổng số người tham gia',
      loading: 'Đang tải các đội...',
    },
    competition: {
      title: 'Chi tiết cuộc thi',
      registration: {
        title: 'Đăng ký',
        desc: 'Mở cho tất cả các nhà đổi mới Gen-Z. Đăng ký đội của bạn từ 3-5 thành viên.',
        link: 'Đăng ký tại đây',
      },
      eligibility: {
        title: 'Đối tượng tham gia',
        desc: 'Sinh viên đại học hiện tại hoặc chuyên gia trẻ (18-25 tuổi) có niềm đam mê với fintech và AI.',
      },
      dates: {
        title: 'Các mốc thời gian quan trọng',
        items: [
          { date: '15/04/2026', event: 'Hạn chót đăng ký' },
          { date: '10/05/2026', event: 'Vòng sơ loại' },
          { date: '05/06/2026', event: 'Ngày Demo chung kết' },
        ],
      },
      prizes: {
        title: 'Giải thưởng',
        items: [
          { rank: 'Giải Nhất', value: '2.000.000 VNĐ + tiềm năng với UII Incubator' },
        ],
      },
      guidelines: {
        title: 'Hướng dẫn nộp bài',
        desc: 'Nộp báo cáo PDF 5 trang và bản mẫu MVP chức năng (link triển khai).',
      },
    },
    gapAnalysis: {
      title: 'Phân tích khoảng cách Fintech',
      intro: 'Sự khác biệt cấu trúc và Căn chỉnh chiến lược: Việt Nam so với Tiêu chuẩn Toàn cầu.',
      ecosystemTitle: 'Hệ sinh thái Fintech Việt Nam: Tổng quan 🌐',
      ecosystemDesc: 'Tổng quan về thị trường Fintech Việt Nam, từ các lĩnh vực chính đến các công ty nổi bật, cho thấy sự năng động và tiềm năng tăng trưởng đặc biệt.',
      stats: {
        valuation: 'Định giá Fintech (2025)',
        unbanked: 'Dân số chưa có tài khoản ngân hàng',
        fraud: 'Gian lận trực tuyến trong Tài chính (2023)',
        internet: 'Tỷ lệ thâm nhập Internet',
      },
      gaps: [
        { 
          title: 'Cơ sở pháp lý', 
          desc: "Nghị định 13 của Việt Nam yêu cầu sự đồng ý rõ ràng cho tất cả việc xử lý dữ liệu, trong khi GDPR cho phép 'lợi ích hợp pháp' cho phân tích và ngăn ngừa gian lận.",
          details: "Có một sự khác biệt cơ bản giữa khung bảo vệ dữ liệu cá nhân của Việt Nam và GDPR của EU về cơ sở pháp lý để xử lý dữ liệu thay thế. Theo GDPR, các tổ chức có thể dựa vào 'lợi ích hợp pháp' để xử lý dữ liệu mà không cần sự đồng ý rõ ràng nếu họ có thể chứng minh rằng lợi ích của họ không bị lấn át bởi quyền của chủ thể dữ liệu. Điều này thường được sử dụng cho phân tích nền tảng, ngăn ngừa gian lận và mô hình hóa tín dụng. Ngược lại, Nghị định 13 của Việt Nam và Luật Bảo vệ dữ liệu cá nhân (LPDP) sau đó không công nhận cơ sở 'lợi ích hợp pháp'. Thay vào đó, họ bắt buộc phải có sự đồng ý rõ ràng, chi tiết và tự nguyện làm cơ sở pháp lý chính cho hầu hết các hoạt động xử lý. Điều này yêu cầu các fintech phải xin phép cho các mục đích sử dụng cụ thể một cách riêng biệt, tạo ra rào cản đáng kể khi tích hợp các bộ dữ liệu thay thế đa dạng để chấm điểm tín dụng toàn diện."
        },
        { 
          title: 'Danh tính số', 
          desc: "Singpass của Singapore cung cấp KYC tức thì qua API MyInfo. VNeID của Việt Nam đang tiến bộ nhưng hiện thiếu quyền truy cập API tự phục vụ cho các fintech tư nhân.",
          details: "Hệ thống Singpass của Singapore đóng vai trò là chuẩn mực toàn cầu về danh tính số, cung cấp một cổng thông tin nhà phát triển mạnh mẽ (Singpass Developer & Partner Portal) nơi các startup fintech có thể truy cập dữ liệu chính phủ đã được xác minh thông qua API MyInfo. Điều này cho phép xác minh danh tính tức thì, giảm thời gian xử lý KYC và giảm tỷ lệ bỏ cuộc của khách hàng lên đến 30%. Các nhà phát triển có thể thử nghiệm ứng dụng trong môi trường sandbox trước khi triển khai đầy đủ. VNeID của Việt Nam đã có những bước tiến ấn tượng, đạt 67 triệu tài khoản và tích hợp xác thực sinh trắc học đa yếu tố. Tuy nhiên, việc tích hợp với lĩnh vực fintech tư nhân rộng lớn hơn vẫn đang ở giai đoạn kiểm soát chặt chẽ, tập trung vào chính phủ. Trong khi các ngân hàng lớn và công ty viễn thông sử dụng VNeID để đăng ký, các công ty fintech nhỏ thường thiếu mức độ truy cập API tự phục vụ và thử nghiệm sandbox tiêu chuẩn hóa như ở Singapore."
        },
        { 
          title: 'Ngân hàng mở', 
          desc: "Anh/EU có sự tách biệt AISP/PISP trưởng thành cho thanh toán trực tiếp. Việt Nam đang ở Giai đoạn 1 (truy vấn cơ bản), với khởi tạo thanh toán (PIS) vẫn ở giai đoạn đầu.",
          details: "OBIE của Vương quốc Anh và PSD2 của EU đã thiết lập một hệ sinh thái trưởng thành nơi các Nhà cung cấp dịch vụ thông tin tài khoản (AISP) và Nhà cung cấp dịch vụ khởi tạo thanh toán (PISP) được quản lý chặt chẽ và tách biệt về mặt chức năng. PISP ở Anh cho phép thanh toán trực tiếp từ tài khoản này sang tài khoản khác với quyết toán tức thì thông qua Faster Payments. Việt Nam đang ở giai đoạn sớm hơn của hành trình này, với Thông tư 64/2024/TT-NHNN có hiệu lực vào ngày 1 tháng 3 năm 2025. Mặc dù thông tư bắt buộc áp dụng Open API cho các ngân hàng thương mại, việc triển khai được thực hiện theo từng giai đoạn. Giai đoạn 1 tập trung vào các API truy vấn thông tin cơ bản (số dư, lịch sử giao dịch), trong khi việc điều phối các dịch vụ khởi tạo thanh toán phức tạp và dịch vụ tài chính thứ cấp vẫn đang hình thành."
        },
        { 
          title: 'Tín dụng nông nghiệp', 
          desc: "Các nhà lãnh đạo toàn cầu sử dụng hình ảnh vệ tinh cho nông dân 'hồ sơ mỏng'. Ở Việt Nam, dữ liệu độ phân giải cao cho các trang trại nhỏ vẫn quá đắt đỏ.",
          details: "Các nhà đổi mới toàn cầu như Apollo Agriculture ở Kenya và Dvara ở Ấn Độ sử dụng hình ảnh vệ tinh và viễn thám để đánh giá mức độ tín nhiệm của các nông dân nhỏ. Bằng cách tam giác hóa giữa dữ liệu quan sát trái đất (sức khỏe cây trồng, lịch sử năng suất) và hành vi ở cấp độ mặt đất, họ có thể cung cấp các khoản vay cho các khách hàng 'hồ sơ mỏng' thiếu quyền sở hữu đất đai hoặc lịch sử tín dụng chính thức. Tại Việt Nam, mặc dù nông nghiệp đóng vai trò quan trọng, việc sử dụng hình ảnh vệ tinh trong fintech vẫn chưa được phổ biến rộng rãi. Hầu hết các khoản cho vay nông nghiệp vẫn dựa trên các tài liệu truyền thống hoặc các đại diện hành vi đơn giản từ việc sử dụng viễn thông. Hơn nữa, một khoảng cách kỹ thuật đáng kể tồn tại trong chi phí dữ liệu độ phân giải cao; trong khi hình ảnh miễn phí từ các sứ mệnh như Copernicus Sentinel cung cấp các thông tin cơ bản, nó thường thiếu độ phân giải cần thiết cho các trang trại nhỏ (dưới hai mẫu Anh) vốn chiếm ưu thế trong cảnh quan Việt Nam."
        },
        { 
          title: 'Quyền tự chủ AI', 
          desc: "Mỹ/Châu Âu đang chuyển từ AI-copilot sang các tác nhân tự trị (như Revolut). Tích hợp AI của Việt Nam vẫn chủ yếu là đàm thoại do sự không chắc chắn về pháp lý.",
          details: "Ngành công nghiệp fintech ở Mỹ và Châu Âu đang chuyển từ 'AI-như-trợ-lý' sang 'AI-như-tác-nhân'—các hệ thống tự trị có khả năng thực hiện các quy trình phức tạp, chẳng hạn như xử lý hoàn tiền hoặc quản lý các giao dịch xuyên biên giới, với sự can thiệp tối thiểu của con người. Revolut và Klarna đã tiên phong trong việc sử dụng các tác nhân này để giảm thời gian giải quyết và chi phí vận hành. Việc triển khai sớm của Revolut được báo cáo là đã giảm thời gian giải quyết xuống 8 lần so với các hàng đợi truyền thống. Các fintech Việt Nam, bao gồm MoMo và ZaloPay, chủ yếu sử dụng AI để phát hiện gian lận, chatbot dịch vụ khách hàng và các đề xuất cá nhân hóa. Tuy nhiên, việc chuyển sang thực thi tự trị—nơi các tác nhân AI chuyển tiền hoặc thực hiện hợp đồng một cách độc lập—bị cản trở bởi 'Ngưỡng tin tưởng' và sự không chắc chắn về pháp lý liên quan đến trách nhiệm pháp lý."
        },
        { 
          title: 'Xuyên biên giới', 
          desc: "Tiêu chuẩn toàn cầu sử dụng ISO 20022 và SWIFT UETR để theo dõi đầu cuối. Việc tích hợp đầy đủ của Việt Nam là mục tiêu tương lai, dẫn đến chậm trễ đối soát.",
          details: "Các chuẩn mực toàn cầu nhấn mạnh việc áp dụng ISO 20022 và tích hợp Tham chiếu giao dịch đầu cuối duy nhất (UETR) và Thông tin giao dịch có cấu trúc (STI) của SWIFT để theo dõi các khoản thanh toán từ nguồn đến đích. Tại Việt Nam, việc áp dụng các tiêu chuẩn này vẫn đang được tiến hành. Mặc dù Swift đã thực hiện thành công các thử nghiệm chứng minh khái niệm với Vietcombank để mang UETR qua nhánh CITAD nội địa, việc tích hợp đầy đủ trên hệ thống tức thời NAPAS rộng lớn hơn vẫn là một 'mục tiêu tương lai'. Điều này tạo ra một khoảng cách nơi các ngân hàng quốc tế gửi tiền vào Việt Nam thường thiếu khả năng hiển thị về cách các giao dịch được định tuyến khi chúng đi vào hệ thống nội địa, dẫn đến các vấn đề đối soát và chậm trễ."
        },
        { 
          title: 'Tích hợp API', 
          desc: "Các API toàn cầu như Stripe/Plaid hỗ trợ VNĐ hạn chế. Các startup Việt Nam phải xây dựng máy chủ OpenAPI riêng để xử lý logic tiền tệ địa phương và tuân thủ.",
          details: "Một điểm đau đầu lớn được xác định đối với các fintech Việt Nam là sự hỗ trợ không đầy đủ cho Đồng Việt Nam (VND) trong các API tài chính toàn cầu tiêu chuẩn như Stripe và Plaid. Các nền tảng này được thiết kế chủ yếu cho các hành lang tiền tệ lớn và thường gặp khó khăn với các yêu cầu địa phương hóa, dẫn đến lỗi hiển thị và xử lý khi giao dịch với các loại tiền tệ không phải Việt Nam. Điều này tạo ra một khoảng cách kỹ thuật nơi các startup Việt Nam không thể dựa vào các giải pháp toàn cầu 'có sẵn' mà thay vào đó phải vượt ra ngoài các tích hợp sandbox đơn giản để xây dựng các máy chủ OpenAPI độc quyền của riêng họ. Các máy chủ tùy chỉnh này là cần thiết để xử lý logic ứng dụng địa phương và đảm bảo rằng các giao dịch và số dư được xử lý chính xác cho thị trường Việt Nam."
        },
        { 
          title: 'Dữ liệu tiện ích', 
          desc: "SGFinDex của Singapore tổng hợp dữ liệu ngân hàng, bảo hiểm và chính phủ. Việt Nam thiếu trao đổi dữ liệu tiện ích tập trung, khiến thông tin bị cô lập.",
          details: "SGFinDex (Singapore Financial Data Exchange) của Singapore cho phép các cá nhân sử dụng danh tính số của họ để truy xuất thông tin tài chính cá nhân từ các ngân hàng, công ty bảo hiểm và cơ quan chính phủ tham gia (như CPF và IRAS) để lập kế hoạch tài chính toàn diện. Việc trao đổi dữ liệu tập trung này đảm bảo rằng người dùng có cái nhìn thống nhất về sức khỏe tài chính của họ, được hỗ trợ bởi mã hóa và quản lý sự đồng ý do chính phủ hậu thuẫn. Việt Nam hiện thiếu một hệ thống trao đổi dữ liệu tiện ích tập trung ở quy mô này. Mặc dù CIC cung cấp một cơ sở dữ liệu tín dụng tập trung, nó không tổng hợp một phổ rộng các dữ liệu tiện ích (điện, nước), bảo hiểm và đầu tư vào một nền tảng duy nhất do người dùng kiểm soát. Thị trường Việt Nam vẫn còn phân mảnh, với dữ liệu bị cô lập giữa các bộ ngành và nhà cung cấp tư nhân khác nhau."
        },
        { 
          title: 'Nguồn dữ liệu', 
          desc: "Các cơ quan tín dụng toàn cầu kết hợp lịch sử lương và thuê nhà. Việt Nam phụ thuộc nhiều vào dấu chân viễn thông và mạng xã hội, thiếu tích hợp hóa đơn tiện ích.",
          details: "Các cơ quan tín dụng toàn cầu đang ngày càng kết hợp một phạm vi rộng hơn các dữ liệu thay thế, bao gồm dữ liệu bảng lương, hồ sơ công khai về các thủ tục pháp lý và thậm chí cả thông tin tâm lý học. Ở một số khu vực pháp lý, lịch sử thuê nhà đang trở thành một thành phần tiêu chuẩn của điểm tín dụng, được cung cấp bởi các nền tảng xác minh các khoản thanh toán nhất quán và kịp thời. Tại Việt Nam, cách tiếp cận 'tất cả dữ liệu là dữ liệu tín dụng' tập trung nhiều vào hành vi viễn thông, dữ liệu di động và dấu chân mạng xã hội. Mặc dù đây là những đại diện mạnh mẽ, hệ sinh thái vẫn chưa tích hợp đầy đủ các bộ dữ liệu thay thế sâu hơn như lịch sử thanh toán hóa đơn tiện ích tập trung, dữ liệu bằng sáng chế cho MSME hoặc thử nghiệm tâm lý học tinh vi, vốn được sử dụng ở những nơi khác để cải thiện dự đoán rủi ro và mở rộng hạn mức tín dụng cho những người chưa được phục vụ đầy đủ."
        },
        { 
          title: 'Sự linh hoạt quy định', 
          desc: "Các trung tâm fintech như London/Singapore có các lộ trình cấp phép tốc độ cao. Việt Nam đối mặt với 'độ trễ quy định' với các phê duyệt sandbox nghiêm ngặt.",
          details: "Các trung tâm fintech trưởng thành như London, Singapore và Hong Kong đã thiết lập các lộ trình quy định tốc độ cao và 'Trung tâm Đổi mới' để nhanh chóng đưa các công nghệ mới vào hoạt động. Các khu vực này ưu tiên chuyển đổi nhanh chóng từ thử nghiệm sandbox sang cấp phép thương mại đầy đủ để duy trì lợi thế cạnh tranh. Môi trường quy định của Việt Nam, mặc dù đang cải thiện, được đặc trưng bởi 'độ trễ quy định'. Cơ chế sandbox theo Nghị định 94 là một bước tiến đáng kể, nhưng quá trình phê duyệt vẫn còn nghiêm ngặt, và việc thiếu một cách tiếp cận pháp lý mạch lạc cho các mô hình kinh doanh hoàn toàn mới (như tài chính phi tập trung hoặc tài sản kỹ thuật số) có thể làm chậm quá trình thâm nhập thị trường của các công ty đổi mới."
        },
      ],
    },
  },
};
