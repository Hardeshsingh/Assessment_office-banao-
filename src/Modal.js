
import React from 'react';

const Modal = ({ onClose, onSave }) => {
    const [details, setDetails] = React.useState({ client: '', startDate: '', endDate: '', rfqCode: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSave = () => {
        onSave(details);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <input type="text" placeholder="Client" name="client" value={details.client} onChange={handleChange} />
                <input type="text" placeholder="Start Date" name="startDate" value={details.startDate} onChange={handleChange} />
                <input type="text" placeholder="End Date" name="endDate" value={details.endDate} onChange={handleChange} />
                <input type="text" placeholder="RFQ Code" name="rfqCode" value={details.rfqCode} onChange={handleChange} />
                <button onClick={handleSave}>Done</button>
            </div>
        </div>
    );
};

export default Modal;
