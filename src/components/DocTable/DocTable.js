import React from "react";
import { Table } from "reactstrap";
import "./doc-table.scss";
import Eye from "../../assets/icons/eye.svg";

const DocTable = () => {
  return (
    <>
      <div className="doc-table">
        <Table responsive>
          <thead className="align-middle">
            <tr>
              <th className="table-th">#</th>
              <th className="table-th">Hujjatlar raqami va sanasi</th>
              <th className="table-th">Ro'yxatga olingan sana</th>
              <th className="table-th">Hujjat kelgan idora</th>
              <th className="table-th">Hujjat turi</th>
              <th className="table-th">Hujjat kimda</th>
              <th className="table-th">Holati</th>
              <th className="table-th">Muddati</th>
              <th className="table-th">Ijro</th>
              <th className="table-th">Amallar</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                1
              </th>
              <td className="table-td">30/1-2308 - 28.10.2020</td>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                O'zbekiston Respublikasi Vazirlar Mahkamasi
              </td>
              <td className="table-td">
                Mamlakatimizda o'zbek tilini yanada rivojlantirish va til
                siyosatini takomillashtirish chora-tadbirlari to'g'risida
                nazorat-reja
              </td>
              <td className="table-td">Table cell</td>
              <td className="table-td">
                Rais o'rinbosari - Majidov G'ayrat Rais o'rinbosari - Botirjon
                Ergashev
              </td>
              <td className="table-td">
                <span className="table-td-span span span--success">Yangi</span>
              </td>
              <td className="table-td">
                Hujjatda ko'rsatilgan sanada ijrosi ta'minlansin
              </td>
              <td className="table-td">
                <button className="table-action-btn" type="button">
                  <img src={Eye} alt="eye icon" width="20" height="20" />
                </button>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                2
              </th>
              <td className="table-td">30/1-2308 - 28.10.2020</td>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                O'zbekiston Respublikasi Vazirlar Mahkamasi
              </td>
              <td className="table-td">
                Mamlakatimizda o'zbek tilini yanada rivojlantirish va til
                siyosatini takomillashtirish chora-tadbirlari to'g'risida
                nazorat-reja
              </td>
              <td className="table-td">Table cell</td>
              <td className="table-td">
                Rais o'rinbosari - Majidov G'ayrat Rais o'rinbosari - Botirjon
                Ergashev
              </td>
              <td className="table-td">
                <span className="table-td-span span span--warning">Yangi</span>
              </td>
              <td className="table-td">Table cell</td>
              <td className="table-td">
                <button className="table-action-btn" type="button">
                  <img src={Eye} alt="eye icon" width="20" height="20" />
                </button>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                3
              </th>
              <td className="table-td">30/1-2308 - 28.10.2020</td>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                O'zbekiston Respublikasi Vazirlar Mahkamasi
              </td>
              <td className="table-td">
                Mamlakatimizda o'zbek tilini yanada rivojlantirish va til
                siyosatini takomillashtirish chora-tadbirlari to'g'risida
                nazorat-reja
              </td>
              <td className="table-td">Table cell</td>
              <td className="table-td">
                Rais o'rinbosari - Majidov G'ayrat Rais o'rinbosari - Botirjon
                Ergashev
              </td>
              <td className="table-td">
                <span className="table-td-span span span--danger">Yangi</span>
              </td>
              <td className="table-td">Table cell</td>
              <td className="table-td">
                <button className="table-action-btn" type="button">
                  <img src={Eye} alt="eye icon" width="20" height="20" />
                </button>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                4
              </th>
              <td className="table-td">30/1-2308 - 28.10.2020</td>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                O'zbekiston Respublikasi Vazirlar Mahkamasi
              </td>
              <td className="table-td">
                Mamlakatimizda o'zbek tilini yanada rivojlantirish va til
                siyosatini takomillashtirish chora-tadbirlari to'g'risida
                nazorat-reja
              </td>
              <td className="table-td">Table cell</td>
              <td className="table-td">
                Rais o'rinbosari - Majidov G'ayrat Rais o'rinbosari - Botirjon
                Ergashev
              </td>
              <td className="table-td">
                <span className="table-td-span span span--success">Yangi</span>
              </td>
              <td className="table-td">Table cell</td>
              <td className="table-td">
                <button className="table-action-btn" type="button">
                  <img src={Eye} alt="eye icon" width="20" height="20" />
                </button>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                5
              </th>
              <td className="table-td">30/1-2308 - 28.10.2020</td>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                O'zbekiston Respublikasi Vazirlar Mahkamasi
              </td>
              <td className="table-td">
                Mamlakatimizda o'zbek tilini yanada rivojlantirish va til
                siyosatini takomillashtirish chora-tadbirlari to'g'risida
                nazorat-reja
              </td>
              <td className="table-td">Table cell</td>
              <td className="table-td">
                Rais o'rinbosari - Majidov G'ayrat Rais o'rinbosari - Botirjon
                Ergashev
              </td>
              <td className="table-td">
                <span className="table-td-span span span--danger">Yangi</span>
              </td>
              <td className="table-td">Table cell</td>
              <td className="table-td">
                <button className="table-action-btn" type="button">
                  <img src={Eye} alt="eye icon" width="20" height="20" />
                </button>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                6
              </th>
              <td className="table-td">30/1-2308 - 28.10.2020</td>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                O'zbekiston Respublikasi Vazirlar Mahkamasi
              </td>
              <td className="table-td">
                Mamlakatimizda o'zbek tilini yanada rivojlantirish va til
                siyosatini takomillashtirish chora-tadbirlari to'g'risida
                nazorat-reja
              </td>
              <td className="table-td">Table cell</td>
              <td className="table-td">
                Rais o'rinbosari - Majidov G'ayrat Rais o'rinbosari - Botirjon
                Ergashev
              </td>
              <td className="table-td">
                <span className="table-td-span span span--danger">Yangi</span>
              </td>
              <td className="table-td">Table cell</td>
              <td className="table-td">
                <button className="table-action-btn" type="button">
                  <img src={Eye} alt="eye icon" width="20" height="20" />
                </button>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                7
              </th>
              <td className="table-td">30/1-2308 - 28.10.2020</td>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                O'zbekiston Respublikasi Vazirlar Mahkamasi
              </td>
              <td className="table-td">
                Mamlakatimizda o'zbek tilini yanada rivojlantirish va til
                siyosatini takomillashtirish chora-tadbirlari to'g'risida
                nazorat-reja
              </td>
              <td className="table-td">Table cell</td>
              <td className="table-td">
                Rais o'rinbosari - Majidov G'ayrat Rais o'rinbosari - Botirjon
                Ergashev
              </td>
              <td className="table-td">
                <span className="table-td-span span span--danger">Yangi</span>
              </td>
              <td className="table-td">Table cell</td>
              <td className="table-td">
                <button className="table-action-btn" type="button">
                  <img src={Eye} alt="eye icon" width="20" height="20" />
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default DocTable;
