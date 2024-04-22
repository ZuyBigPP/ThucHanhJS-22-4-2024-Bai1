var teachers =[
    {
        image: "avatar.jpg",
        name: "Nguyen Van A",
        contact: {
            email: "xxx@gmail.com",
            phone: "xxx xxx xxx",
            address: 'xxx, xxx, xxx',
            date: 'xx/xx/xxxx',
            major: 'Trí tuệ nhân tạo',
        },
        khoa: "Công nghệ thông tin",
        chuyen_nganh: "Hệ thống thông tin",
    },
    {
        image: "avatar.jpg",
        name: "Nguyen Van B",
        contact: {
            email: "yyy@gmail.com",
            phone: "yyy yyy yyy",
            address: 'yyy, yyy, yyy',
            date: 'yy/yy/yyyy',
            major: 'Trí tuệ nhân tạo',
        },
        khoa: "Công nghệ thông tin",
        chuyen_nganh: "Hệ thống thông tin",
    }
]

function display() {
    const tbody = document.getElementById('thong-tin');
    tbody.innerHTML = '';

    teachers.forEach(teacher => {
        const tr = document. createElement('tr');

        const imgTd = document.createElement('td');
        const img = document.createElement('img');
        img.src = teacher.image;
        img.alt = teacher.name;
        imgTd.appendChild(img);
        tr.appendChild(imgTd);

        const nameTd = document.createElement('td');
        nameTd.textContent = teacher.name;
        tr.appendChild(nameTd);

        const contactTd = document.createElement('td');
        const contactUl = document.createElement('ul');
        const emailLi = document.createElement('li');
        emailLi.textContent = 'Email: ' + teacher.contact.email;
        const phoneLi = document.createElement('li');
        phoneLi.textContent = 'Phone: ' + teacher.contact.phone;
        const addressLi = document.createElement('li');
        addressLi.textContent = 'Address: ' + teacher.contact.address;
        const dateLi = document.createElement('li');
        dateLi.textContent = 'date: ' + teacher.contact.date;
        const majorLi = document.createElement('li');
        majorLi.textContent = 'major: ' + teacher.contact.major;
        contactUl.appendChild(emailLi);
        contactUl.appendChild(phoneLi);
        contactUl.appendChild(addressLi);
        contactUl.appendChild(dateLi);
        contactUl.appendChild(majorLi);
        contactTd.appendChild(contactUl);
        tr.appendChild(contactTd);

        const khoaTd = document.createElement('td');
        khoaTd.textContent = teacher.khoa;
        tr.appendChild(khoaTd);

        const chuyen_nganhTd = document.createElement('td');
        chuyen_nganhTd.textContent = teacher.chuyen_nganh;
        tr.appendChild(chuyen_nganhTd);

        const actionTd = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Sửa';
        editBtn.classList.add('edit');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Xóa';
        deleteBtn.classList.add('delete');
        actionTd.appendChild(editBtn);
        actionTd.appendChild(deleteBtn);
        tr.appendChild(actionTd);
        tbody.appendChild(tr);
    })
}
display();
const editBtn = document.getElementById('edit');
editBtn.onclick = function() {
    
}
