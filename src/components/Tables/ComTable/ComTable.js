/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Table } from "reactstrap";
import "./comtable.scss";
import Eye from "../../../assets/icons/eye.svg";

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
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                1
              </th>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                <p className="table-td-text">
                  O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev
                  rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan
                  videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi
                  to'g'risida
                </p>
              </td>
              <td className="table-td">
                <span className="table-td-span">10-10-10</span>
              </td>
              <td className="table-td">
                <a className="table-td-link" href="#" download>
                  link to download
                </a>
              </td>
              <td className="table-td">
                <div className="table-td-list">
                  <button className="action-btn action-btn--del">
                    <i className="action-icon action-icon--edit bx bxs-edit"></i>
                  </button>
                  <button className="action-btn action-btn--edit">
                    <i className="action-icon action-icon--del bx bxs-trash-alt"></i>
                  </button>
                  <button className="action-btn action-btn--del">
                    <img
                      className="action-icon--del"
                      src={Eye}
                      alt="eye icon"
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                1
              </th>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                <p className="table-td-text">
                  O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev
                  rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan
                  videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi
                  to'g'risida
                </p>
              </td>
              <td className="table-td">
                <span className="table-td-span">10-10-10</span>
              </td>
              <td className="table-td">
                <a className="table-td-link" href="#" download>
                  link to download
                </a>
              </td>
              <td className="table-td">
                <div className="table-td-list">
                  <button className="action-btn action-btn--del">
                    <i className="action-icon action-icon--edit bx bxs-edit"></i>
                  </button>
                  <button className="action-btn action-btn--edit">
                    <i className="action-icon action-icon--del bx bxs-trash-alt"></i>
                  </button>
                  <button className="action-btn action-btn--del">
                    <img
                      className="action-icon--del"
                      src={Eye}
                      alt="eye icon"
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                1
              </th>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                <p className="table-td-text">
                  O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev
                  rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan
                  videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi
                  to'g'risida
                </p>
              </td>
              <td className="table-td">
                <span className="table-td-span">10-10-10</span>
              </td>
              <td className="table-td">
                <a className="table-td-link" href="#" download>
                  link to download
                </a>
              </td>
              <td className="table-td">
                <div className="table-td-list">
                  <button className="action-btn action-btn--del">
                    <i className="action-icon action-icon--edit bx bxs-edit"></i>
                  </button>
                  <button className="action-btn action-btn--edit">
                    <i className="action-icon action-icon--del bx bxs-trash-alt"></i>
                  </button>
                  <button className="action-btn action-btn--del">
                    <img
                      className="action-icon--del"
                      src={Eye}
                      alt="eye icon"
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                1
              </th>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                <p className="table-td-text">
                  O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev
                  rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan
                  videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi
                  to'g'risida
                </p>
              </td>
              <td className="table-td">
                <span className="table-td-span">10-10-10</span>
              </td>
              <td className="table-td">
                <a className="table-td-link" href="#" download>
                  link to download
                </a>
              </td>
              <td className="table-td">
                <div className="table-td-list">
                  <button className="action-btn action-btn--del">
                    <i className="action-icon action-icon--edit bx bxs-edit"></i>
                  </button>
                  <button className="action-btn action-btn--edit">
                    <i className="action-icon action-icon--del bx bxs-trash-alt"></i>
                  </button>
                  <button className="action-btn action-btn--del">
                    <img
                      className="action-icon--del"
                      src={Eye}
                      alt="eye icon"
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                1
              </th>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                <p className="table-td-text">
                  O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev
                  rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan
                  videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi
                  to'g'risida
                </p>
              </td>
              <td className="table-td">
                <span className="table-td-span">10-10-10</span>
              </td>
              <td className="table-td">
                <a className="table-td-link" href="#" download>
                  link to download
                </a>
              </td>
              <td className="table-td">
                <div className="table-td-list">
                  <button className="action-btn action-btn--del">
                    <i className="action-icon action-icon--edit bx bxs-edit"></i>
                  </button>
                  <button className="action-btn action-btn--edit">
                    <i className="action-icon action-icon--del bx bxs-trash-alt"></i>
                  </button>
                  <button className="action-btn action-btn--del">
                    <img
                      className="action-icon--del"
                      src={Eye}
                      alt="eye icon"
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                1
              </th>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                <p className="table-td-text">
                  O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev
                  rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan
                  videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi
                  to'g'risida
                </p>
              </td>
              <td className="table-td">
                <span className="table-td-span">10-10-10</span>
              </td>
              <td className="table-td">
                <a className="table-td-link" href="#" download>
                  link to download
                </a>
              </td>
              <td className="table-td">
                <div className="table-td-list">
                  <button className="action-btn action-btn--del">
                    <i className="action-icon action-icon--edit bx bxs-edit"></i>
                  </button>
                  <button className="action-btn action-btn--edit">
                    <i className="action-icon action-icon--del bx bxs-trash-alt"></i>
                  </button>
                  <button className="action-btn action-btn--del">
                    <img
                      className="action-icon--del"
                      src={Eye}
                      alt="eye icon"
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                1
              </th>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                <p className="table-td-text">
                  O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev
                  rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan
                  videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi
                  to'g'risida
                </p>
              </td>
              <td className="table-td">
                <span className="table-td-span">10-10-10</span>
              </td>
              <td className="table-td">
                <a className="table-td-link" href="#" download>
                  link to download
                </a>
              </td>
              <td className="table-td">
                <div className="table-td-list">
                  <button className="action-btn action-btn--del">
                    <i className="action-icon action-icon--edit bx bxs-edit"></i>
                  </button>
                  <button className="action-btn action-btn--edit">
                    <i className="action-icon action-icon--del bx bxs-trash-alt"></i>
                  </button>
                  <button className="action-btn action-btn--del">
                    <img
                      className="action-icon--del"
                      src={Eye}
                      alt="eye icon"
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                1
              </th>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                <p className="table-td-text">
                  O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev
                  rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan
                  videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi
                  to'g'risida
                </p>
              </td>
              <td className="table-td">
                <span className="table-td-span">10-10-10</span>
              </td>
              <td className="table-td">
                <a className="table-td-link" href="#" download>
                  link to download
                </a>
              </td>
              <td className="table-td">
                <div className="table-td-list">
                  <button className="action-btn action-btn--del">
                    <i className="action-icon action-icon--edit bx bxs-edit"></i>
                  </button>
                  <button className="action-btn action-btn--edit">
                    <i className="action-icon action-icon--del bx bxs-trash-alt"></i>
                  </button>
                  <button className="action-btn action-btn--del">
                    <img
                      className="action-icon--del"
                      src={Eye}
                      alt="eye icon"
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                1
              </th>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                <p className="table-td-text">
                  O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev
                  rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan
                  videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi
                  to'g'risida
                </p>
              </td>
              <td className="table-td">
                <span className="table-td-span">10-10-10</span>
              </td>
              <td className="table-td">
                <a className="table-td-link" href="#" download>
                  link to download
                </a>
              </td>
              <td className="table-td">
                <div className="table-td-list">
                  <button className="action-btn action-btn--del">
                    <i className="action-icon action-icon--edit bx bxs-edit"></i>
                  </button>
                  <button className="action-btn action-btn--edit">
                    <i className="action-icon action-icon--del bx bxs-trash-alt"></i>
                  </button>
                  <button className="action-btn action-btn--del">
                    <img
                      className="action-icon--del"
                      src={Eye}
                      alt="eye icon"
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                1
              </th>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                <p className="table-td-text">
                  O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev
                  rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan
                  videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi
                  to'g'risida
                </p>
              </td>
              <td className="table-td">
                <span className="table-td-span">10-10-10</span>
              </td>
              <td className="table-td">
                <a className="table-td-link" href="#" download>
                  link to download
                </a>
              </td>
              <td className="table-td">
                <div className="table-td-list">
                  <button className="action-btn action-btn--del">
                    <i className="action-icon action-icon--edit bx bxs-edit"></i>
                  </button>
                  <button className="action-btn action-btn--edit">
                    <i className="action-icon action-icon--del bx bxs-trash-alt"></i>
                  </button>
                  <button className="action-btn action-btn--del">
                    <img
                      className="action-icon--del"
                      src={Eye}
                      alt="eye icon"
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                1
              </th>
              <td className="table-td">01-05/149 - 29.10.2020</td>
              <td className="table-td">
                <p className="table-td-text">
                  O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev
                  rahbarligida 2019 yil 27 dekabr kuni mamlakat yoshlari bilan
                  videoselektor tarzida o'tkazilgan 58-sonli bayon ijrosi
                  to'g'risida
                </p>
              </td>
              <td className="table-td">
                <span className="table-td-span">10-10-10</span>
              </td>
              <td className="table-td">
                <a className="table-td-link" href="#" download>
                  link to download
                </a>
              </td>
              <td className="table-td">
                <div className="table-td-list">
                  <button className="action-btn action-btn--del">
                    <i className="action-icon action-icon--edit bx bxs-edit"></i>
                  </button>
                  <button className="action-btn action-btn--edit">
                    <i className="action-icon action-icon--del bx bxs-trash-alt"></i>
                  </button>
                  <button className="action-btn action-btn--del">
                    <img
                      className="action-icon--del"
                      src={Eye}
                      alt="eye icon"
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ComTable;
