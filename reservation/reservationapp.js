function submitReservation() {
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const table = document.getElementById('table').value;
    const time = document.getElementById('time').value;
    const workerId = document.getElementById('workerId').value.trim();
    const message = document.getElementById('message');

    // Sadə ID yoxlaması üçün 10 nümunə
    const validIds = [
        'AZE00001', 'AZE00002', 'AZE00003', 'AZE00004', 'AZE00005',
        'AZE00006', 'AZE00007', 'AZE00008', 'AZE00009', 'AZE00010'
    ];

    if (!name || !surname || !table || !time || !workerId) {
        message.style.color = 'red';
        message.textContent = "Zəhmət olmasa bütün xanaları doldurun.";
        return;
    }

    if (validIds.includes(workerId)) {
        message.style.color = 'green';
        message.textContent = `Sizin rezerviniz qəbul olunmuşdur (${table}, ${time})`;
    } else {
        message.style.color = 'red';
        message.textContent = "Yalnız Azerenerji işçiləri rezervasiya edə bilər.";
    }
}
