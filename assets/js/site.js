// Language toggle (EN/VI), theme toggle and scroll reveal. No dependencies.
(function () {
  var VI = {
    'skip': 'Chuyển đến dự án',
    'nav.work': 'Dự án',
    'nav.about': 'Giới thiệu',
    'nav.contact': 'Liên hệ',
    'hero.title': 'Tôi biến quy trình kinh doanh thành hệ thống và dashboard rõ ràng.',
    'hero.sub': 'Sinh viên năm cuối ngành Hệ thống thông tin quản lý, ứng tuyển thực tập BA / DA, có bốn năm làm vận hành bán hàng.',
    'hero.cta': 'Xem dự án',
    'cv': 'Tải CV',
    'cv.ba': 'CV - Business Analyst',
    'cv.da': 'CV - Data Analyst',
    'stat.dax': 'công thức DAX trong một mô hình Power BI',
    'stat.tests': 'unit test tự động cho tầng nghiệp vụ C#',
    'stat.cases': 'test case đạt, gồm SQL injection, XSS, CSRF',
    'stat.years.n': '4 năm',
    'stat.years': 'làm vận hành bán hàng trước khi học đại học',
    'work.title': 'Dự án tiêu biểu',
    'p1.title': 'Phân tích tuyển sinh UEH',
    'p1.lead': 'Dữ liệu tuyển sinh và việc làm sau tốt nghiệp của 59 ngành tại UEH giai đoạn 2021-2025, thể hiện qua 3 dashboard tương tác cho ban lãnh đạo, phòng tuyển sinh và phòng đào tạo.',
    'p1.role': 'Nhóm 3 người. Tôi thực hiện toàn bộ sản phẩm phân tích:',
    'p1.d1': 'Xây dựng bộ dữ liệu từ số liệu công khai năm 2025 và dữ liệu mô phỏng có phương pháp',
    'p1.d2': 'Làm sạch và chuẩn hóa 10 bảng bằng Power Query',
    'p1.d3': 'Thiết kế mô hình dạng sao: 4 bảng chiều, 6 bảng sự kiện, 11 quan hệ',
    'p1.d4': 'Viết 35 công thức DAX và đối chiếu các KPI chính với Excel',
    'p1.d5': 'Thiết kế dashboard có drill-through, tooltip và bookmark',
    'p2.title': 'Hệ thống đăng ký khóa học',
    'p2.lead': 'Ứng dụng desktop quản lý khóa học, hội thảo, lớp, học viên, đăng ký và điểm danh, có báo cáo và biểu đồ.',
    'p2.role': 'Dự án cá nhân. Tôi làm mọi công đoạn:',
    'p2.d1': 'Phân tích yêu cầu, quy tắc nghiệp vụ và vai trò người dùng',
    'p2.d2': 'CSDL SQL Server 6 bảng, view và stored procedure có transaction',
    'p2.d3': 'Định hướng giao diện, mockup và design system',
    'p2.d4': 'Code 4 tầng (Models / DAL / BLL / GUI), quy tắc nghiệp vụ dùng đa hình',
    'p2.d5': '85 unit test, 12 test case thủ công và bản build phát hành bằng GitHub Actions',
    'p3.title': 'Hỗ trợ yêu cầu sinh viên',
    'p3.lead': 'Ứng dụng web để sinh viên gửi và theo dõi yêu cầu hỗ trợ, cán bộ tiếp nhận, phản hồi và thống kê.',
    'p3.role': 'Dự án cá nhân. Tôi làm mọi công đoạn:',
    'p3.d1': 'Phân tích quy trình cho 3 vai trò, use case, ERD và wireframe',
    'p3.d2': 'CSDL MySQL 5 bảng có transaction và nhật ký thay đổi trạng thái',
    'p3.d3': 'Giao diện responsive có dark mode, không dùng framework',
    'p3.d4': 'Bảo mật: prepared statement, CSRF token, kiểm tra tệp tải lên, khóa đăng nhập',
    'p3.d5': '45 test case đạt; chạy thử 1 chạm trên GitHub Codespaces',
    'p4.title': 'CI/CD với GitHub Actions',
    'p4.lead': 'Ứng dụng web quản lý công việc, đi qua pipeline kiểm tra code, test trên 3 phiên bản Python và tự triển khai mỗi lần merge.',
    'p4.role': 'Nhóm 3 người. Tôi làm toàn bộ phần kỹ thuật:',
    'p4.d1': 'REST API bằng Flask có kiểm tra dữ liệu, giao diện JavaScript thuần',
    'p4.d2': 'Bộ test pytest có đo độ phủ, kiểm tra code bằng flake8',
    'p4.d3': 'Workflow: lint, test ma trận, rồi tự triển khai lên Render',
    'p4.d4': 'Quy tắc nhánh chặn pull request bị lỗi',
    'link.repo': 'Mã nguồn',
    'link.download': 'Tải ứng dụng',
    'link.try': 'Chạy thử trên Codespaces',
    'link.live': 'Xem bản chạy thật',
    'about.title': 'Quá trình',
    't1.h': 'Cử nhân Hệ thống thông tin quản lý',
    't1.p': 'Trường Đại học Lao động - Xã hội (Cơ sở II). GPA 3.1/4.0',
    't2.h': 'Sales Admin, Công ty Quang Huy',
    't2.p': 'Xử lý 50-70 đơn hàng mỗi ngày trên MISA CRM cho Circle K, Co.opmart; lập báo cáo doanh thu và công nợ hằng tuần bằng Excel.',
    't3.h': 'Nhân viên kinh doanh, C.P. Việt Nam và Thảo Tiên',
    't3.p': 'Tìm hiểu nhu cầu và tư vấn sản phẩm, doanh số khoảng 500 triệu đồng mỗi tháng.',
    'skills.title': 'Kỹ năng',
    's1': 'Phân tích nghiệp vụ',
    's2': 'Dữ liệu',
    's3': 'Xây dựng',
    'c.req': 'Phân tích yêu cầu',
    'c.uc': 'Use case',
    'c.proc': 'Sơ đồ quy trình',
    'c.tc': 'Test case',
    'c.py': 'Python (cơ bản)',
    'contact.title': 'Liên hệ với tôi.',
    'contact.sub': 'Sẵn sàng thực tập Business Analyst và Data Analyst tại TP.HCM hoặc làm từ xa.'
  };

  var nodes = document.querySelectorAll('[data-i18n]');
  var EN = {};
  nodes.forEach(function (n) { EN[n.dataset.i18n] = n.textContent; });

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function setLang(lang) {
    var dict = lang === 'vi' ? VI : EN;
    nodes.forEach(function (n) { var t = dict[n.dataset.i18n]; if (t) n.textContent = t; });
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    store('lang', lang);
  }
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });
  var saved = load('lang');
  if (saved === 'vi' || (!saved && (navigator.language || '').toLowerCase().indexOf('vi') === 0)) setLang('vi');

  // Theme: follows the system until the visitor picks one
  var themeBtn = document.querySelector('.theme');
  themeBtn.addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    store('theme', root.dataset.theme);
  });

  // Close the CV menu when clicking elsewhere
  var cv = document.querySelector('.cv-menu');
  document.addEventListener('click', function (e) { if (cv.open && !cv.contains(e.target)) cv.open = false; });

  // Reveal sections as they enter the viewport
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { items.forEach(function (i) { i.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach(function (i) { io.observe(i); });
})();
