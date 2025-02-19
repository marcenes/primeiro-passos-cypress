class DashboardPage {
    selectorsList(){
        const selectorsdashBoard = {
            dashboardGrid: '.orangehrm-dashboard-grid',
        }
        return selectorsdashBoard
    }

    checkdashboardPage(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }
}

export default DashboardPage