import { Linkedin, Mail, Phone } from "lucide-react";

export const DATA = {
  personal: {
    name: "Vũ Hồng Linh",
    role: "Business Analyst & UI/UX Designer",
    location: "Hanoi, Vietnam",
    email: "vhonglinh28@gmail.com",
    phone: "036 861 9874",
    linkedin: "https://www.linkedin.com/in/vhlinh28",
    bio: "Chuyển mình từ UI/UX Designer sang Business Analyst với mục tiêu trở thành Product Owner trong 3-5 năm tới. Tôi kết hợp tư duy thẩm mỹ và phân tích nghiệp vụ sắc bén để tạo ra các giải pháp số hiệu quả.",
    fullBio:
      "Tốt nghiệp chuyên ngành CNTT và có 2 năm kinh nghiệm làm UI/UX Designer, tôi đã tham gia nhiều dự án đa dạng như e-CRM, ERP, và Booking App. Gần đây, tôi chuyển hướng sang Business Analyst để có cái nhìn toàn diện hơn về phát triển sản phẩm. Tôi tự tin với kiến thức kỹ thuật, kỹ năng thiết kế và đam mê học hỏi không ngừng.",
  },
  experience: [
    {
      company: "Viettin Lab, Ltd",
      role: "Business Analyst",
      period: "Jan 2025 - Jul 2025",
      description: "Phát triển sản phẩm Labconnect Pro (Hệ thống LIS).",
      details: [
        "Phát triển các tính năng hỗ trợ bác sĩ và kỹ thuật viên quản lý quy trình xét nghiệm tự động.",
        "Trực tiếp khảo sát và thu thập yêu cầu tại các bệnh viện lớn (Bạch Mai, K, Phụ sản TW).",
        "Thiết kế module CRM tích hợp và module quản lý Kho & Tài sản.",
        "Mô hình hóa nghiệp vụ bằng BPMN 2.0 và thiết kế UI/UX.",
        "Phối hợp chặt chẽ với đội ngũ Dev/Tester trong suốt vòng đời tính năng và UAT.",
      ],
    },
    {
      company: "Atomi Digital",
      role: "Business Analyst",
      period: "Aug 2024 - Jan 2025",
      description: "Phát triển sản phẩm LV24H e-banking.",
      details: [
        "Thiết kế quy trình nghiệp vụ và hành trình người dùng cho tính năng thanh toán hóa đơn và chuyển khoản định kỳ.",
        "Xây dựng biểu đồ BPMN và tài liệu chi tiết (BRD, FRD, SRS) để định nghĩa logic nghiệp vụ và luồng hệ thống.",
      ],
    },
    {
      company: "Freelance",
      role: "UI/UX Designer & Business Analyst",
      period: "Aug 2024 - Current",
      description: "Tham gia các dự án PV PIPE ERP và Finxy.",
      details: [
        "PV PIPE ERP: Phân tích quy trình sản xuất ống thép, xây dựng luồng nghiệp vụ và thiết kế Wireframe/Prototype.",
        "Finxy (Finance App): Nghiên cứu đối thủ, phỏng vấn người dùng, thiết kế giao diện và làm việc với PO để hoàn thiện luồng ứng dụng.",
      ],
    },
    {
      company: "Capi Agency",
      role: "UI/UX Designer",
      period: "Aug 2024 - Jan 2025",
      description: "Dự án Pionails và mFamily.",
      details: [
        "Phỏng vấn khách hàng, nghiên cứu hệ thống POS hiện tại và xây dựng Wireframe/Prototype.",
        "Thực hiện Usability Testing với người dùng thật để đánh giá trải nghiệm ứng dụng.",
      ],
    },
  ],
  education: [
    {
      school: "University of Economics Technology for Industries",
      degree: "Information Technology",
      year: "2020-2024",
    },
  ],
  certifications: [
    "Google UX Design (Coursera)",
    "Google Data Foundation (Coursera)",
    "Business Analysis Foundation (Hai Lua Mentor)",
  ],
  projects: [
    {
      id: 1,
      title: "Labconnect Pro",
      category: "LIS / Healthcare",
      year: "2025",
      description:
        "Hệ thống quản lý thông tin phòng xét nghiệm (LIS). Phát triển tính năng quản lý mẫu, tích hợp CRM và module quản lý kho & tài sản.",
      company: "Viettin Lab, Ltd",
    },
    {
      id: 2,
      title: "LV24H E-banking",
      category: "Fintech / Banking",
      year: "2024",
      description:
        "Ứng dụng ngân hàng số. Thiết kế quy trình nghiệp vụ (BPMN) và hành trình người dùng cho tính năng thanh toán hóa đơn và chuyển khoản định kỳ.",
      company: "Atomi Digital",
    },
    {
      id: 3,
      title: "PV PIPE ERP",
      category: "ERP / Manufacturing",
      year: "2024",
      description:
        "Hệ thống ERP quản lý sản xuất ống thép. Phân tích quy trình sản xuất, xây dựng luồng nghiệp vụ và thiết kế Wireframe/Prototype.",
      company: "Freelance",
    },
    {
      id: 4,
      title: "Finxy & Pionails",
      category: "Personal Finance & POS",
      year: "2024",
      description:
        "Ứng dụng quản lý tài chính cá nhân và hệ thống POS. Nghiên cứu đối thủ, phỏng vấn người dùng và thiết kế giao diện UI/UX.",
      company: "Freelance / Capi Agency",
    },
  ],
  blog: [
    {
      id: 1,
      title: "Chuyển đổi từ UI/UX Designer sang Business Analyst",
      date: "Oct 12, 2024",
      category: "Career",
      excerpt:
        "Hành trình thay đổi tư duy từ 'đẹp' sang 'đúng' và cách kỹ năng thiết kế hỗ trợ đắc lực cho công việc phân tích nghiệp vụ.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Tầm quan trọng của BPMN 2.0 trong quy trình phát triển phần mềm",
      date: "Sep 28, 2024",
      category: "Knowledge",
      excerpt:
        "Tại sao việc mô hình hóa quy trình nghiệp vụ lại quan trọng? Cách sử dụng BPMN để giao tiếp hiệu quả giữa Stakeholders và Dev team.",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Case Study: Tối ưu hóa trải nghiệm người dùng cho hệ thống LIS",
      date: "Aug 15, 2024",
      category: "Case Study",
      excerpt:
        "Những bài học rút ra khi thiết kế giao diện cho bác sĩ và kỹ thuật viên phòng xét nghiệm tại các bệnh viện lớn.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Kỹ năng 'Elicitation' - Nghệ thuật khơi gợi yêu cầu",
      date: "Jul 05, 2024",
      category: "Skills",
      excerpt:
        "Làm thế nào để đặt câu hỏi đúng và thấu hiểu những nỗi đau (pain points) thực sự của người dùng thay vì chỉ nghe những gì họ muốn.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    },
  ],
  skills: {
    tech: [
      "Figma",
      "Draw.io",
      "Jira",
      "PostgreSQL",
      "BPMN 2.0",
      "UML",
      "Microsoft Suite",
    ],
    services: [
      "Business Analysis",
      "UI/UX Design",
      "Wireframing & Prototyping",
      "Requirement Gathering",
      "UAT Testing",
    ],
  },
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vhlinh28" },
    { name: "Email", url: "mailto:vhonglinh28@gmail.com" },
    { name: "Phone", url: "tel:0368619874" },
  ],
};
