import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageBalanceComponent } from './pages/cabinet/page-balance/page-balance.component';
import { PageBookingComponent } from './pages/cabinet/page-booking/page-booking.component';
import { PagePartnershipComponent } from './pages/cabinet/page-partnership/page-partnership.component';
import { PageRealtiesComponent } from './pages/cabinet/page-realties/page-realties.component';
import { PageReviewsComponent } from './pages/cabinet/page-reviews/page-reviews.component';
import { PageTransfersComponent } from './pages/cabinet/page-transfers/page-transfers.component';
import { PageArticleComponent } from './pages/site/page-article/page-article.component';
import { PageAuthorizationComponent } from './pages/site/page-authorization/page-authorization.component';
import { PageCarRentalComponent } from './pages/site/page-car-rental/page-car-rental.component';
import { PageCommissionComponent } from './pages/site/page-commission/page-commission.component';
import { PageComplexComponent } from './pages/site/page-complex/page-complex.component';
import { PageContactsComponent } from './pages/site/page-contacts/page-contacts.component';
import { PageFavoritesComponent } from './pages/site/page-favorites/page-favorites.component';
import { PageManagementComponent } from './pages/site/page-management/page-management.component';
import { PageSearchComponent } from './pages/site/page-search/page-search.component';
import { PageSupportComponent } from './pages/site/page-support/page-support.component';
import { PageTransferComponent } from './pages/site/page-transfer/page-transfer.component';
import { PageWithdrawComponent } from './pages/site/page-withdraw/page-withdraw.component';
import { PageBookingsComponent } from './pages/cabinet/page-bookings/page-bookings.component';
import { PageProfileComponent } from './pages/cabinet/page-profile/page-profile.component';
import { PageReferralBookingsComponent } from './pages/cabinet/page-referral-bookings/page-referral-bookings.component';
import { PageTripsComponent } from './pages/cabinet/page-trips/page-trips.component';
import { PageAboutComponent } from './pages/site/page-about/page-about.component';
import { PageCleaningComponent } from './pages/site/page-cleaning/page-cleaning.component';
import { PageRealtyComponent } from './pages/site/page-realty/page-realty.component';
import { PageTrustComponent } from './pages/site/page-trust/page-trust.component';
import { PageAddComponent } from './pages/cabinet/page-add/page-add.component';
import { PageIndexComponent } from './pages/site/page-index/page-index.component';
import { PageEscortComponent } from './pages/site/page-escort/page-escort.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: PageIndexComponent },
  { path: 'search', component: PageSearchComponent },
  { path: 'realty/:id', component: PageRealtyComponent },
  { path: 'complex/:id', component: PageComplexComponent },
  { path: 'favorites', component: PageFavoritesComponent },
  { path: 'article/:slug', component: PageArticleComponent },
  { path: 'authorization', component: PageAuthorizationComponent },

  { path: 'rentacar', component: PageCarRentalComponent },
  { path: 'cleaning', component: PageCleaningComponent },
  { path: 'commission', component: PageCommissionComponent },
  { path: 'contacts', component: PageContactsComponent },
  { path: 'escort', component: PageEscortComponent },
  { path: 'management', component: PageManagementComponent },
  { path: 'support', component: PageSupportComponent },
  { path: 'transfer', component: PageTransferComponent },
  { path: 'trust', component: PageTrustComponent },
  { path: 'withdraw', component: PageWithdrawComponent },
  { path: 'about', component: PageAboutComponent },

  { path: 'cabinet/add', component: PageAddComponent },
  { path: 'cabinet/balance', component: PageBalanceComponent },
  { path: 'cabinet/bookings', component: PageBookingsComponent },
  { path: 'cabinet/booking', component: PageBookingComponent },
  { path: 'cabinet/partnership', component: PagePartnershipComponent },
  { path: 'cabinet/profile', component: PageProfileComponent },
  { path: 'cabinet/realties', component: PageRealtiesComponent },
  { path: 'cabinet/referral-bookings', component: PageReferralBookingsComponent },
  { path: 'cabinet/reviews', component: PageReviewsComponent },
  { path: 'cabinet/transfers', component: PageTransfersComponent },
  { path: 'cabinet/trips', component: PageTripsComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}