// lichonthi.js

// Toggle hoàn thành môn học
document.querySelectorAll('.complete').forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.innerText === '✔') {
            cell.innerText = '✘';
            cell.style.color = '#d9534f';  // Màu đỏ khi chưa hoàn thành
        } else {
            cell.innerText = '✔';
            cell.style.color = '#28a745';  // Màu xanh khi hoàn thành
        }
    });
});

// Hiển thị ngày thi sắp tới
window.addEventListener('load', () => {
    const dates = [
        { subject: 'Toán', date: '15/11' },
        { subject: 'Văn', date: '17/11' },
        { subject: 'Anh', date: '18/11' }
    ];

    const today = new Date();
    const upcoming = dates.find(d => new Date(d.date) > today);

    if (upcoming) {
        document.querySelector('.upcoming p').innerText = `Ngày thi sắp tới: ${upcoming.subject} - ${upcoming.date}`;
    } else {
        document.querySelector('.upcoming p').innerText = 'Không có ngày thi sắp tới.';
    }
});
