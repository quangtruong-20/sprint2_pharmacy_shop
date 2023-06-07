import React from "react";

function ModalDeleteCartDetail(props) {
  return (
<>
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content" style={{
        maxWidth: 462,
        width: "calc(100% - 32px)",
        borderRadius: 12,
        borderTopRightRadius: 12,
        marginBottom: "auto",
        marginTop:"190px",
        maxHeight: "calc(100% - 64px)"
      }}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel" style={{ fontWeight: 700, fontSize: 20, lineHeight: 1 }}>
            Xóa sản phẩm
          </h5>
          <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
          />
        </div>
        <div className="modal-body">
          Bạn có muốn xóa sản phẩm {props.deletedName} khỏi giỏ hàng không?
        </div>
        <div className="modal-footer" style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}>
          <button type="button" style={{color: "#5e6f88", backgroundColor: "#f2f4f5", borderColor: "#f2f4f5",flex: "2 0", outline: "none", fontSize: 17, lineHeight: 1, padding: "15px 16px", borderRadius: 12, cursor: "pointer", border: "1px solid transparent"}} data-bs-dismiss="modal">
            Thoát
          </button>
          <button type="button" style={{color: "#fff", backgroundColor: "#f33060", borderColor: "#f33060",flex: "3 0", marginLeft: 12, outline: "none", fontSize: 17, lineHeight: 1, padding: "15px 16px", borderRadius: 12, cursor: "pointer", border: "1px solid transparent"}} data-bs-dismiss="modal" onClick={() => props.onCompletedDelete()}>
            Xóa
          </button>
        </div>
      </div>
    </div>
  </div>


</>


)
}

export default ModalDeleteCartDetail;
