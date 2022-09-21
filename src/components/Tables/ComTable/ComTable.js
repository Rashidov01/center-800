/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Table } from "reactstrap";
import { EyeOutlined } from "@ant-design/icons";
import "./comtable.scss";

const data = [
  {
    id: 1,
    date: "12.12.2022",
    title:
      "O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi to'g'risida",
    main: "10-10-10",
    file: "file to download",
  },
  {
    id: 2,
    date: "12.12.2022",
    title:
      "O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi to'g'risida",
    main: "10-10-10",
    file: "file to download",
  },
  {
    id: 3,
    date: "12.12.2022",
    title:
      "O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi to'g'risida",
    main: "10-10-10",
    file: "file to download",
  },
  {
    id: 4,
    date: "12.12.2022",
    title:
      "O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi to'g'risida",
    main: "10-10-10",
    file: "file to download",
  },
  {
    id: 5,
    date: "12.12.2022",
    title:
      "O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi to'g'risida",
    main: "10-10-10",
    file: "file to download",
  },
  {
    id: 6,
    date: "12.12.2022",
    title:
      "O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi to'g'risida",
    main: "10-10-10",
    file: "file to download",
  },
];
const ComTable = () => {
  return (
    <>
      <div className="doc-table">
        <Table responsive>
          <thead className="align-middle">
            <tr>
              <th className="table-th">#</th>
              <th className="table-th">Hujjat raqami va sanasi</th>
              <th className="table-th">Qisqacha mazmuni</th>
              <th className="table-th">Asosi</th>
              <th className="table-th">Yuklangan fayllar</th>
              <th className="table-th">Amallar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              console.log(item);
              return (
                <tr key={item.id} className="table-tbody-tr">
                  <th className="table-row" scope="row">
                    {item.id}
                  </th>
                  <td className="table-td">{item.date}</td>
                  <td className="table-td">
                    <p className="table-td-text">{item.title}</p>
                  </td>
                  <td className="table-td">
                    <span className="table-td-span">{item.main}</span>
                  </td>
                  <td className="table-td">
                    <a className="table-td-link" href="#" download>
                      {item.file}
                    </a>
                  </td>
                  <td className="table-td">
                    <div className="table-td-list">
                      <button className="action-btn action-btn--eye">
                        <EyeOutlined className="action-icon " />
                      </button>
                      <button className="action-btn action-btn--edit">
                        <i className="action-icon action-icon--edit bx bx-pencil"></i>
                      </button>
                      <button className="action-btn action-btn--del">
                        <i className="action-icon action-icon--del bx bxs-trash-alt"></i>
                      </button>
                    </div>
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

export default ComTable;
