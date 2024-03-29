import React, { useState } from 'react';
import './styles.css';
import Modal from './Modal'; // Import the Modal component

const WorkOrderScreen = () => {
    const [showOverview, setShowOverview] = useState(true);
    const [showHello, setShowHello] = useState(false);
    const [workItems, setWorkItems] = useState([
        { 
            id: 1, 
            name: "Item 1", 
            selected: false, 
            rate: 526, 
            total: 254867, 
            expanded: false, 
            subcategories: [
                { 
                    id: 11, 
                    name: "Subcategory 1",
                    expanded: false,
                    total: 254867,
                    subSubcategories: [
                        { id: 111, name: "Subsubcategory 1", total: 254867 },
                        { id: 112, name: "Subsubcategory 2", total: 254867 }
                    ]
                },
                { 
                    id: 12, 
                    name: "Subcategory 2",
                    expanded: false,
                    total: 254867,
                    subSubcategories: [
                        { id: 121, name: "Subsubcategory 1", total: 254867 },
                        { id: 122, name: "Subsubcategory 2", total: 254867 }
                    ]
                }
            ] 
        },
        { 
            id: 2, 
            name: "Item 2", 
            selected: false, 
            rate: 478, 
            total: 2016423, 
            expanded: false, 
            subcategories: [
                { 
                    id: 21, 
                    name: "Subcategory 1",
                    expanded: false,
                    total: 2016423,
                    subSubcategories: [
                        { id: 211, name: "Subsubcategory 1", total: 2016423 },
                        { id: 212, name: "Subsubcategory 2", total: 2016423 }
                    ]
                },
                { 
                    id: 22, 
                    name: "Subcategory 2",
                    expanded: false,
                    total: 2016423,
                    subSubcategories: [
                        { id: 221, name: "Subsubcategory 1", total: 2016423 },
                        { id: 222, name: "Subsubcategory 2", total: 2016423 }
                    ]
                }
            ] 
        },
        { 
            id: 3, 
            name: "Item 3", 
            selected: false, 
            rate: 588, 
            total: 2485624, 
            expanded: false, 
            subcategories: [
                { 
                    id: 31, 
                    name: "Subcategory 1",
                    expanded: false,
                    total: 2485624,
                    subSubcategories: [
                        { id: 311, name: "Subsubcategory 1", total: 2485624 },
                        { id: 312, name: "Subsubcategory 2", total: 2485624 }
                    ]
                },
                { 
                    id: 32, 
                    name: "Subcategory 2",
                    expanded: false,
                    total: 2485624,
                    subSubcategories: [
                        { id: 321, name: "Subsubcategory 1", total: 2485624 },
                        { id: 322, name: "Subsubcategory 2", total: 2485624 }
                    ]
                }
            ] 
        },
        { 
            id: 4, 
            name: "Item 4", 
            selected: false, 
            rate: 411, 
            total: 1745245, 
            expanded: false, 
            subcategories: [
                { 
                    id: 41, 
                    name: "Subcategory 1",
                    expanded: false,
                    total: 1745245,
                    subSubcategories: [
                        { id: 411, name: "Subsubcategory 1", total: 1745245 },
                        { id: 412, name: "Subsubcategory 2", total: 1745245 }
                    ]
                },
                { 
                    id: 42, 
                    name: "Subcategory 2",
                    expanded: false,
                    total: 1745245,
                    subSubcategories: [
                        { id: 421, name: "Subsubcategory 1", total: 1745245 },
                        { id: 422, name: "Subsubcategory 2", total: 1745245 }
                    ]
                }
            ] 
        },
        { 
            id: 5, 
            name: "Item 5", 
            selected: false, 
            rate: 502, 
            total: 2555555, 
            expanded: false, 
            subcategories: [
                { 
                    id: 51, 
                    name: "Subcategory 1",
                    expanded: false,
                    total: 2555555,
                    subSubcategories: [
                        { id: 511, name: "Subsubcategory 1", total: 2555555 },
                        { id: 512, name: "Subsubcategory 2", total: 2555555 }
                    ]
                },
                { 
                    id: 52, 
                    name: "Subcategory 2",
                    expanded: false,
                    total: 2555555,
                    subSubcategories: [
                        { id: 521, name: "Subsubcategory 1", total: 2555555 },
                        { id: 522, name: "Subsubcategory 2", total: 2555555 }
                    ]
                }
            ] 
        },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    const [selectAll, setSelectAll] = useState(false); // State to track select all checkbox status

    const toggleWorkItemSelection = (id) => {
        const updatedItems = workItems.map(item => {
            if (item.id === id) {
                return { ...item, selected: !item.selected };
            }
            return item;
        });
        setWorkItems(updatedItems);
    };

    const handleSaveSelection = () => {
        setIsModalOpen(true); // Open the modal when Save Selection is clicked
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    const handleSaveModal = (details) => {
        console.log("Details:", details); // Log the details to console
    };

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        const updatedItems = workItems.map(item => ({ ...item, selected: !selectAll }));
        setWorkItems(updatedItems);
    };

    const toggleExpand = (id) => {
        const updatedItems = workItems.map(item => {
            if (item.id === id) {
                return { ...item, expanded: !item.expanded };
            }
            return item;
        });
        setWorkItems(updatedItems);
    };

    const toggleExpandSubcategory = (itemId, subcategoryId) => {
        const updatedItems = workItems.map(item => {
            if (item.id === itemId) {
                const updatedSubcategories = item.subcategories.map(subcategory => {
                    if (subcategory.id === subcategoryId) {
                        return { ...subcategory, expanded: !subcategory.expanded };
                    }
                    return subcategory;
                });
                return { ...item, subcategories: updatedSubcategories };
            }
            return item;
        });
        setWorkItems(updatedItems);
    };

   

    return (
        <div>
            <div>
                <button onClick={() => setShowOverview(true)}>Overview</button>
                <button onClick={() => setShowHello(true)}>Others</button>
            </div>
            {showOverview && (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                                </th>
                                <th>Packages</th>
                                <th>Rate</th>
                                <th>Total</th>
                                <th>Expand</th>
                            </tr>
                        </thead>
                        <tbody>
                            {workItems.map(item => (
                                <React.Fragment key={item.id}>
                                    <tr>
                                        <td>
                                            <input type="checkbox" checked={item.selected} onChange={() => toggleWorkItemSelection(item.id)} />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.rate}</td>
                                        <td>{item.total}</td>
                                        <td>
                                            <button onClick={() => toggleExpand(item.id)}>{item.expanded ? '-' : '+'}</button>
                                        </td>
                                    </tr>
                                    {item.expanded && item.subcategories.map(subcategory => (
                                        <React.Fragment key={subcategory.id}>
                                            <tr>
                                                <td></td>
                                                <td>
                                                    <button onClick={() => toggleExpandSubcategory(item.id, subcategory.id)}>
                                                        {subcategory.expanded ? '-' : '+'}
                                                    </button>{' '}
                                                    {subcategory.name}
                                                </td>
                                                <td></td>
                                                <td>{subcategory.total}</td>
                                                <td></td>
                                            </tr>
                                            {subcategory.expanded && subcategory.subSubcategories.map(subSubcategory => (
                                                <tr key={subSubcategory.id}>
                                                    <td></td>
                                                    <td>{subSubcategory.name}</td>
                                                    <td></td>
                                                    <td>{subSubcategory.total}</td>
                                                    <td></td>
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {showHello && <p>Hello World!</p>}
            <hr />
            <button className="save-changes-btn" onClick={handleSaveSelection}>Save Changes</button>
            {isModalOpen && (
                <Modal onClose={handleCloseModal} onSave={handleSaveModal} />
            )}
        </div>
    );
};

export default WorkOrderScreen;
