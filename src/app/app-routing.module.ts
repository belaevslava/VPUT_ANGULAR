import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserBalancePageComponent } from './pages/cabinet/user-balance-page/user-balance-page.component';
import { UserBookingPageComponent } from './pages/cabinet/user-booking-page/user-booking-page.component';
import { UserPartnershipPageComponent } from './pages/cabinet/user-partnership-page/user-partnership-page.component';
import { UserRealtyPageComponent } from './pages/cabinet/user-realty-page/user-realty-page.component';
import { UserReviewsPageComponent } from './pages/cabinet/user-reviews-page/user-reviews-page.component';
import { UserTransfersPageComponent } from './pages/cabinet/user-transfers-page/user-transfers-page.component';
import { ArticlePageComponent } from './pages/public/article-page/article-page.component';
import { AuthorizationPageComponent } from './pages/public/authorization-page/authorization-page.component';
import { CarRentalPageComponent } from './pages/public/car-rental-page/car-rental-page.component';
import { CommissionPageComponent } from './pages/public/commission-page/commission-page.component';
import { ComplexPageComponent } from './pages/public/complex-page/complex-page.component';
import { ContactsPageComponent } from './pages/public/contacts-page/contacts-page.component';
import { FavoritesPageComponent } from './pages/public/favorites-page/favorites-page.component';
import { ManagementPageComponent } from './pages/public/management-page/management-page.component';
import { SearchPageComponent } from './pages/public/search-page/search-page.component';
import { SupportPageComponent } from './pages/public/support-page/support-page.component';
import { TransferPageComponent } from './pages/public/transfer-page/transfer-page.component';
import { WithdrawPageComponent } from './pages/public/withdraw-page/withdraw-page.component';
import { UserBookingsPageComponent } from './pages/cabinet/user-bookings-page/user-bookings-page.component';
import { UserProfilePageComponent } from './pages/cabinet/user-profile-page/user-profile-page.component';
import { UserReferralBookingsPageComponent } from './pages/cabinet/user-referral-bookings-page/user-referral-bookings-page.component';
import { UserTripsPageComponent } from './pages/cabinet/user-trips-page/user-trips-page.component';
import { AboutPageComponent } from './pages/public/about-page/about-page.component';
import { CleaningPageComponent } from './pages/public/cleaning-page/cleaning-page.component';
import { RealtyPageComponent } from './pages/public/realty-page/realty-page.component';
import { TrustPageComponent } from './pages/public/trust-page/trust-page.component';
import { AddRealtyPageComponent } from './pages/cabinet/add-realty-page/add-realty-page.component';
import { IndexPageComponent } from './pages/public/index-page/index-page.component';
import { EscortPageComponent } from './pages/public/escort-page/escort-page.component';
import { Status404PageComponent } from './pages/public/status404-page/status404-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '404', component: Status404PageComponent },
  { path: 'index', component: IndexPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'realty/:id', component: RealtyPageComponent },
  { path: 'complex/:id', component: ComplexPageComponent },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: 'article/:alias', component: ArticlePageComponent },
  { path: 'authorization', component: AuthorizationPageComponent },

  { path: 'rentacar', component: CarRentalPageComponent },
  { path: 'cleaning', component: CleaningPageComponent },
  { path: 'commission', component: CommissionPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'escort', component: EscortPageComponent },
  { path: 'management', component: ManagementPageComponent },
  { path: 'support', component: SupportPageComponent },
  { path: 'transfer', component: TransferPageComponent },
  { path: 'trust', component: TrustPageComponent },
  { path: 'withdraw', component: WithdrawPageComponent },
  { path: 'about', component: AboutPageComponent },

  { path: 'cabinet/add', component: AddRealtyPageComponent },
  { path: 'cabinet/balance', component: UserBalancePageComponent },
  { path: 'cabinet/bookings', component: UserBookingsPageComponent },
  { path: 'cabinet/booking', component: UserBookingPageComponent },
  { path: 'cabinet/partnership', component: UserPartnershipPageComponent },
  { path: 'cabinet/profile', component: UserProfilePageComponent },
  { path: 'cabinet/realty', component: UserRealtyPageComponent },
  { path: 'cabinet/referral-bookings', component: UserReferralBookingsPageComponent },
  { path: 'cabinet/reviews', component: UserReviewsPageComponent },
  { path: 'cabinet/transfers', component: UserTransfersPageComponent },
  { path: 'cabinet/trips', component: UserTripsPageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}