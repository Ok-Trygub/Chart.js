import users from "./users_with_rating.js";

const labels = users.map(item => `${item.firstName} ${item.lastName}`);

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Last year (2021)',
            data: users.map(user => user.rating),
            borderColor: 'orange',
            backgroundColor: 'green',
            borderWidth: 2,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false,
        },
        {
            label: 'Current year (2022)',
            data: users.map(user => user.rating),
            borderColor: 'blue',
            backgroundColor: 'beige',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'JS course random rating'
            }
        }
    },
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(
    ctx,
    config
);
