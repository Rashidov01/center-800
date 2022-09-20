import React from "react";
import { Table } from "reactstrap";
import "./infotable.scss";
import Eye from "../../../assets/icons/eye.svg";

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
              {/* <th className="table-th">Muddati</th> */}
              {/* <th className="table-th">Ijro</th> */}
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
                Hujjatda ko'rsatilgan sanada ijrosi ta'minlansin
              </td>
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

export default InfoTable;
