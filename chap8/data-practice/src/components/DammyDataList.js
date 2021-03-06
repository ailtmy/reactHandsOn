import React from "react";
import faker from '@faker-js/faker'

const bigList = [...Array(5000)].map(() => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
}));

function List({ data = [], renderItem, renderEmpty }) {
    return !data.length ? (
        renderEmpty
    ) : (
        <ul>
            {data.map((item, i) => (
                <li key={i}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}

export default function DammyDataList() {
    const renderItem = (item) => (
        <div style={{ display: "flex" }}>
            <img src={item.avatar} alt={item.name} width={50} />
            <p>
                {item.name} - {item.email}
            </p>
        </div>
    );

    return (
        <List
            data={bigList}
            renderItem={renderItem}
            renderEmpty={<p>No Data!</p>}
        />
    );
}
