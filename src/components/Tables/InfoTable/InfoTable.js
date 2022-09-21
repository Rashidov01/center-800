import React from "react";
import { Table } from "reactstrap";
import { EyeOutlined } from "@ant-design/icons";
import "./infotable.scss";

const data = [
  {
    id: "1",
    from: "30/1-2308 - 28.10.2020",
    to: "01-05/149 - 29.10.2020",
    title: "O'zbekiston Respublikasi Vazirlar Mahkamasi",
    desc: "Mamlakatimizda o'zbek tilini yanada rivojlantirish va til siyosatini takomillashtirish chora-tadbirlari to'g'risida nazorat-reja",
    type: "Prezident Farmoni",
    feature: "114-03-03",
  },
  {
    id: "2",
    from: "30/1-2308 - 28.10.2020",
    to: "01-05/149 - 29.10.2020",
    title: "O'zbekiston Respublikasi Vazirlar Mahkamasi",
    desc: "Mamlakatimizda o'zbek tilini yanada rivojlantirish va til siyosatini takomillashtirish chora-tadbirlari to'g'risida nazorat-reja",
    type: "Prezident Farmoni",
    feature: "114-03-03",
  },
  {
    id: "3",
    from: "30/1-2308 - 28.10.2020",
    to: "01-05/149 - 29.10.2020",
    title: "O'zbekiston Respublikasi Vazirlar Mahkamasi",
    desc: "Mamlakatimizda o'zbek tilini yanada rivojlantirish va til siyosatini takomillashtirish chora-tadbirlari to'g'risida nazorat-reja",
    type: "Prezident Farmoni",
    feature: "114-03-03",
  },
  {
    id: "4",
    from: "30/1-2308 - 28.10.2020",
    to: "01-05/149 - 29.10.2020",
    title: "O'zbekiston Respublikasi Vazirlar Mahkamasi",
    desc: "Mamlakatimizda o'zbek tilini yanada rivojlantirish va til siyosatini takomillashtirish chora-tadbirlari to'g'risida nazorat-reja",
    type: "Prezident Farmoni",
    feature: "114-03-03",
  },
  {
    id: "5",
    from: "30/1-2308 - 28.10.2020",
    to: "01-05/149 - 29.10.2020",
    title: "O'zbekiston Respublikasi Vazirlar Mahkamasi",
    desc: "Mamlakatimizda o'zbek tilini yanada rivojlantirish va til siyosatini takomillashtirish chora-tadbirlari to'g'risida nazorat-reja",
    type: "Prezident Farmoni",
    feature: "114-03-03",
  },
  {
    id: "6",
    from: "30/1-2308 - 28.10.2020",
    to: "01-05/149 - 29.10.2020",
    title: "O'zbekiston Respublikasi Vazirlar Mahkamasi",
    desc: "Mamlakatimizda o'zbek tilini yanada rivojlantirish va til siyosatini takomillashtirish chora-tadbirlari to'g'risida nazorat-reja",
    type: "Prezident Farmoni",
    feature: "114-03-03",
  },
  {
    id: "7",
    from: "30/1-2308 - 28.10.2020",
    to: "01-05/149 - 29.10.2020",
    title: "O'zbekiston Respublikasi Vazirlar Mahkamasi",
    desc: "Mamlakatimizda o'zbek tilini yanada rivojlantirish va til siyosatini takomillashtirish chora-tadbirlari to'g'risida nazorat-reja",
    type: "Prezident Farmoni",
    feature: "114-03-03",
  },
  {
    id: "8",
    from: "30/1-2308 - 28.10.2020",
    to: "01-05/149 - 29.10.2020",
    title: "O'zbekiston Respublikasi Vazirlar Mahkamasi",
    desc: "Mamlakatimizda o'zbek tilini yanada rivojlantirish va til siyosatini takomillashtirish chora-tadbirlari to'g'risida nazorat-reja",
    type: "Prezident Farmoni",
    feature: "114-03-03",
  },
];

const InfoTable = () => {
  return (
    <>
      <div className="doc-table">
        <Table responsive>
          <thead className="align-middle">
            <tr>
              <th className="table-th">#</th>
              <th className="table-th">
                Javob xatining ro'yhatga olingan vaqti va raqami
              </th>
              <th className="table-th">Turi</th>
              <th className="table-th">Hujjat</th>
              <th className="table-th">Kimga jo'ntailgan</th>
              <th className="table-th">Javob xati</th>
              <th className="table-th">Holati</th>
              <th className="table-th">Amallar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id} className="table-tbody-tr">
                  <th className="table-row" scope="row">
                    {item.id}
                  </th>
                  <td className="table-td">{item.from}</td>
                  <td className="table-td">{item.to}</td>
                  <td className="table-td">{item.title}</td>
                  <td className="table-td">{item.desc}</td>
                  <td className="table-td">{item.type}</td>
                  <td className="table-td">{item.feature}</td>
                  <td className="table-td table-td-button">
                    <button className="action-btn action-btn--eye">
                      <EyeOutlined className="action-icon " />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default InfoTable;
