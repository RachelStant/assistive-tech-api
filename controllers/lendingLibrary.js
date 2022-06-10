import lendingLibraryData from "../data/lendingLibrary.js";


export const getAllLendingLibraries = (req, res) => {
    res.status(200).json({
        status: true,
        data: lendingLibraryData
    })
}


export const getLendingLibraryByState = (req, res) => {
    const state = req.params.state

    const libraries = lendingLibraryData.filter((library) => library.state === state)

    if (!libraries.length) {
        return res.status(404).json({
            status: false,
            data: 'Error: No Lending Libraries in this State, check spelling or capitalize state name'
        })
    }

    return res.json({
        status: true,
        data: libraries
    })

}