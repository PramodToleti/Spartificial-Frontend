import { useState } from "react";
import PropTypes from "prop-types";

const DataTable = ({ data, columns, actions }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const handleActionClick = (item, action) => {
    setSelectedItem(item);
    setModalContent(action.modalContent);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
    setModalContent(null);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="pb-10">
      <div className="relative  flex flex-col items-center shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((col) => (
                <th key={col.header} scope="col" className="px-6 py-3">
                  {col.header}
                </th>
              ))}
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                {columns.map((col) => (
                  <td key={col.accessor} className="px-6 py-4">
                    {item[col.accessor]}
                  </td>
                ))}
                <td className="px-6 py-4">
                  {actions.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => handleActionClick(item, action)}
                      className={`font-medium ${action.className} hover:underline mr-2`}
                    >
                      {action.label}
                    </button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl mb-4 text-black">{modalContent.title}</h2>
              {modalContent.render(selectedItem, closeModal)}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-end mt-4 w-full">
        <nav className="inline-flex items-center">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            &laquo;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border rounded-md mx-1 ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            &raquo;
          </button>
        </nav>
      </div>
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired,
};

export default DataTable;
