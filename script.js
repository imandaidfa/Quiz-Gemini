document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "Apa yang dimaksud dengan Google Gemini AI?",
            options: [
                "Model bahasa besar yang dikembangkan oleh Google AI.",
                "Sebuah mesin pencari baru dari Google.",
                "Sistem operasi untuk perangkat mobile.",
                "Layanan cloud storage dari Google."
            ],
            answer: "Model bahasa besar yang dikembangkan oleh Google AI."
        },
        {
            question: "Kapan Google Gemini AI pertama kali diperkenalkan?",
            options: [
                "Januari 2024",
                "Desember 2023",
                "Oktober 2023",
                "November 2022"
            ],
            answer: "Desember 2023"
        },
        {
            question: "Apa salah satu kemampuan utama dari Google Gemini AI?",
            options: [
                "Menganalisis data keuangan secara real-time.",
                "Memahami dan menghasilkan berbagai jenis media (teks, gambar, audio, video).",
                "Mengelola basis data relasional yang kompleks.",
                "Melakukan operasi robotik presisi tinggi."
            ],
            answer: "Memahami dan menghasilkan berbagai jenis media (teks, gambar, audio, video)."
        },
        {
            question: "Dalam konteks apa Google Gemini AI dirancang untuk digunakan?",
            options: [
                "Hanya untuk penelitian ilmiah tingkat lanjut.",
                "Berbagai aplikasi, termasuk chatbot, asisten virtual, dan pembuatan konten.",
                "Khusus untuk mengoptimalkan kinerja server.",
                "Eksklusif untuk pengembangan perangkat keras baru."
            ],
            answer: "Berbagai aplikasi, termasuk chatbot, asisten virtual, dan pembuatan konten."
        },
        {
            question: "Model Google Gemini AI hadir dalam berapa ukuran berbeda?",
            options: [
                "Tiga (Ultra, Pro, Nano).",
                "Dua (Mini, Maxi).",
                "Empat (Lite, Standard, Advanced, Premium).",
                "Lima (Small, Medium, Large, Extra Large, Giant)."
            ],
            answer: "Tiga (Ultra, Pro, Nano)."
        },
        {
            question: "Fitur keamanan apa yang ditekankan Google dalam pengembangan Gemini AI?",
            options: [
                "Enkripsi data pengguna tingkat militer.",
                "Keamanan dan etika AI yang bertanggung jawab.",
                "Isolasi jaringan fisik dari internet.",
                "Penggunaan blockchain untuk verifikasi integritas model."
            ],
            answer: "Keamanan dan etika AI yang bertanggung jawab."
        },
        {
            question: "Bagaimana Google Gemini AI dibandingkan dengan model AI sebelumnya dari Google, seperti LaMDA atau PaLM?",
            options: [
                "Gemini hanya lebih cepat dalam memproses teks.",
                "Gemini lebih multimodal dan memiliki kemampuan penalaran yang lebih canggih.",
                "Gemini hanya fokus pada pembuatan gambar.",
                "Gemini memiliki ukuran model yang jauh lebih kecil."
            ],
            answer: "Gemini lebih multimodal dan memiliki kemampuan penalaran yang lebih canggih."
        },
        {
            question: "Dalam produk Google apa saja Gemini AI diintegrasikan atau akan diintegrasikan?",
            options: [
                "Google Maps dan Google Earth saja.",
                "Google Bard, Pixel, dan aplikasi Google lainnya.",
                "Hanya Google Workspace (Docs, Sheets, Slides).",
                "YouTube dan Google Photos saja."
            ],
            answer: "Google Bard, Pixel, dan aplikasi Google lainnya."
        },
        {
            question: "Apa tujuan utama di balik pengembangan Google Gemini AI?",
            options: [
                "Menggantikan semua insinyur perangkat lunak dengan AI.",
                "Membangun model AI yang dapat menangani berbagai modalitas dan tugas secara efisien.",
                "Membuat robot yang dapat berinteraksi dengan manusia.",
                "Memecahkan masalah matematika yang tidak terpecahkan."
            ],
            answer: "Membangun model AI yang dapat menangani berbagai modalitas dan tugas secara efisien."
        },
        {
            question: "Siapa yang bertanggung jawab atas pengembangan Google Gemini AI?",
            options: [
                "Google AI.",
                "DeepMind secara independen.",
                "Tim riset eksternal yang didanai Google.",
                "Kemitraan antara Google dan OpenAI."
            ],
            answer: "Google AI."
        },
        {
            question: "Siapa mitra kolaborasi utama Google dalam pengembangan Gemini AI?",
            options: [
                "OpenAI",
                "Microsoft",
                "Google DeepMind",
                "Amazon"
            ],
            answer: "Google DeepMind"
        },
        {
            question: "Apa nama model Gemini AI yang dioptimalkan untuk perangkat seluler?",
            options: [
                "Gemini Ultra",
                "Gemini Pro",
                "Gemini Mini",
                "Gemini Nano"
            ],
            answer: "Gemini Nano"
        },
        {
            question: "Teknologi apa yang digunakan Gemini AI untuk memahami dan menganalisis gambar serta video?",
            options: [
                "Kemampuan monomodal",
                "Kemampuan multimodal",
                "Kemampuan tekstual",
                "Kemampuan audio"
            ],
            answer: "Kemampuan multimodal"
        },
        {
            question: "Selain teks, gambar, dan video, jenis data apa lagi yang dapat diproses oleh Gemini AI?",
            options: [
                "Hanya data numerik",
                "Sinyal radio",
                "Data sensor",
                "Audio"
            ],
            answer: "Audio"
        },
        {
            question: "Apa yang dimaksud dengan 'penalaran tingkat lanjut' pada Gemini AI?",
            options: [
                "Kemampuan untuk menghafal fakta dengan cepat.",
                "Kemampuan untuk memahami dan memecahkan masalah yang kompleks.",
                "Kemampuan untuk menghasilkan gambar dengan detail tinggi.",
                "Kemampuan untuk menerjemahkan bahasa secara harfiah."
            ],
            answer: "Kemampuan untuk memahami dan memecahkan masalah yang kompleks."
        },
        {
            question: "Pada perangkat Google apa Gemini Nano diimplementasikan pertama kali?",
            options: [
                "Google Pixel 6",
                "Google Pixel 7",
                "Google Pixel 8 Pro",
                "Google Pixel Fold"
            ],
            answer: "Google Pixel 8 Pro"
        },
        {
            question: "Sebutkan salah satu contoh tugas yang dapat dilakukan Gemini AI dalam pembuatan konten.",
            options: [
                "Mempercepat waktu booting komputer.",
                "Menulis email, membuat ringkasan, atau membuat kode program.",
                "Mengoptimalkan penggunaan baterai ponsel.",
                "Melakukan diagnosa perangkat keras."
            ],
            answer: "Menulis email, membuat ringkasan, atau membuat kode program."
        },
        {
            question: "Bagaimana model Gemini Pro digunakan dalam layanan Google Bard?",
            options: [
                "Untuk menganalisis data pengguna.",
                "Sebagai mesin pencari utama.",
                "Sebagai model AI yang mendasari chatbot.",
                "Untuk mengelola data cloud."
            ],
            answer: "Sebagai model AI yang mendasari chatbot."
        },
        {
            question: "Apa yang menjadi keunggulan Gemini AI dibandingkan dengan model sebelumnya dalam hal efisiensi?",
            options: [
                "Membutuhkan lebih banyak daya komputasi.",
                "Hanya bisa berjalan pada perangkat desktop.",
                "Dirancang untuk berjalan lebih cepat dan lebih efisien.",
                "Tidak dapat memproses data secara paralel."
            ],
            answer: "Dirancang untuk berjalan lebih cepat dan lebih efisien."
        },
        {
            question: "Apa salah satu manfaat utama dari pengembangan Gemini AI yang etis dan bertanggung jawab?",
            options: [
                "Mempercepat waktu pelatihan model.",
                "Mencegah bias dan memastikan keamanan pengguna.",
                "Meningkatkan ukuran model AI.",
                "Memperluas jangkauan layanan Google."
            ],
            answer: "Mencegah bias dan memastikan keamanan pengguna."
        }
    ];

    const quizQuestionsEl = document.getElementById('quiz-questions');
    const submitButton = document.getElementById('submit-button');
    const resultsContainer = document.getElementById('results');
    const scoreTextEl = document.getElementById('score-text');
    const restartButton = document.getElementById('restart-button');

    // Fungsi untuk merender pertanyaan
    function renderQuestions() {
        quizQuestionsEl.innerHTML = ''; // Mengosongkan kontainer
        quizData.forEach((item, index) => {
            const questionEl = document.createElement('div');
            questionEl.className = 'mb-6 p-4 bg-gray-50 rounded-lg shadow-sm';
            questionEl.innerHTML = `
                <p class="font-semibold text-lg mb-3 text-gray-900">${index + 1}. ${item.question}</p>
                <div class="space-y-2">
                    ${item.options.map(option => `
                        <label class="flex items-center space-x-2 cursor-pointer p-3 rounded-md transition-colors duration-200 hover:bg-indigo-50">
                            <input type="radio" name="question${index}" value="${option}" class="form-radio text-indigo-600 focus:ring-indigo-500">
                            <span class="text-gray-700">${option}</span>
                        </label>
                    `).join('')}
                </div>
            `;
            quizQuestionsEl.appendChild(questionEl);
        });
    }

    // Fungsi untuk menghitung dan menampilkan hasil
    function showResults() {
        let score = 0;
        quizData.forEach((item, index) => {
            const selector = `input[name="question${index}"]:checked`;
            const selectedOption = document.querySelector(selector);
            if (selectedOption && selectedOption.value === item.answer) {
                score++;
            }
        });

        scoreTextEl.textContent = `Anda mendapatkan ${score} dari ${quizData.length} pertanyaan benar!`;
        
        quizQuestionsEl.classList.add('hidden');
        submitButton.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
    }

    // Fungsi untuk memulai ulang kuis
    function restartQuiz() {
        quizQuestionsEl.classList.remove('hidden');
        submitButton.classList.remove('hidden');
        resultsContainer.classList.add('hidden');
        renderQuestions();
    }

    // Event listener untuk tombol kirim
    submitButton.addEventListener('click', showResults);
    
    // Event listener untuk tombol coba lagi
    restartButton.addEventListener('click', restartQuiz);

    // Merender kuis saat halaman dimuat
    renderQuestions();
});
