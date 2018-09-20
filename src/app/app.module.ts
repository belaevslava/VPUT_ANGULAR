import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { AgmCoreModule } from '@agm/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};

import {RealtyDescriptionComponent} from './sections/realty-description/realty-description.component';
import {AuthorizationFormComponent} from './forms/authorization-form/authorization-form.component';
import {AskForHelpComponent} from './notifications/ask-for-help/ask-for-help.component';
import {ApartmentsInTheComplexComponent} from './sections/apartments-in-the-complex/apartments-in-the-complex.component';
import {PaginationComponent} from './common/pagination/pagination.component';
import {UserPartnershipPageComponent} from './pages/cabinet/user-partnership-page/user-partnership-page.component';
import {LatestRealtyComponent} from './sections/latest-realty/latest-realty.component';
import {ServiceSettingsFormComponent} from './forms/service-settings-form/service-settings-form.component';
import {FavoritesPageComponent} from './pages/public/favorites-page/favorites-page.component';
import {GuaranteesComponent} from './sections/guarantees/guarantees.component';
import {UserReferralBookingsPageComponent} from './pages/cabinet/user-referral-bookings-page/user-referral-bookings-page.component';
import {MostPopularCitiesComponent} from './sections/most-popular-cities/most-popular-cities.component';
import {BestRealtyOfTheWeekComponent} from './sections/best-realty-of-the-week/best-realty-of-the-week.component';
import {PageFooterComponent} from './common/page-footer/page-footer.component';
import {RealtyInterestedInComponent} from './common/realty-interested-in/realty-interested-in.component';
import {CommissionPageComponent} from './pages/public/commission-page/commission-page.component';
import {LatestReviewsComponent} from './sections/latest-reviews/latest-reviews.component';
import {AuthorizationModalComponent} from './modals/authorization-modal/authorization-modal.component';
import {RatingComponent} from './common/rating/rating.component';
import {RealtyPricesComponent} from './sections/realty-prices/realty-prices.component';
import {BookingFormComponent} from './forms/booking-form/booking-form.component';
import {IndexPageComponent} from './pages/public/index-page/index-page.component';
import {UserRealtyPageComponent} from './pages/cabinet/user-realty-page/user-realty-page.component';
import {BookingsFilterFormComponent} from './forms/bookings-filter-form/bookings-filter-form.component';
import {UserBookingsPageComponent} from './pages/cabinet/user-bookings-page/user-bookings-page.component';
import {ServicesComponent} from './sections/services/services.component';
import {UserBalancePageComponent} from './pages/cabinet/user-balance-page/user-balance-page.component';
import {PreloaderComponent} from './common/preloader/preloader.component';
import {AuthorizationPageComponent} from './pages/public/authorization-page/authorization-page.component';
import {ComplexRealtyComponent} from './sections/complex-realty/complex-realty.component';
import {CabinetNavigationComponent} from './common/cabinet-navigation/cabinet-navigation.component';
import {CharacteristicsOfTheComplexComponent} from './sections/characteristics-of-the-complex/characteristics-of-the-complex.component';
import {AboutTheComplexComponent} from './sections/about-the-complex/about-the-complex.component';
import {TransferPageComponent} from './pages/public/transfer-page/transfer-page.component';
import {WithdrawPageComponent} from './pages/public/withdraw-page/withdraw-page.component';
import {SupportPageComponent} from './pages/public/support-page/support-page.component';
import {SearchPageComponent} from './pages/public/search-page/search-page.component';
import {ReviewsCarouselComponent} from './common/reviews-carousel/reviews-carousel.component';
import {PageHeaderComponent} from './common/page-header/page-header.component';
import {RealtyListComponent} from './common/realty-list/realty-list.component';
import {CarRentalPageComponent} from './pages/public/car-rental-page/car-rental-page.component';
import {AvatarComponent} from './common/avatar/avatar.component';
import {RealtyComponent} from './common/realty/realty.component';
import {OurServicesComponent} from './sections/our-services/our-services.component';
import {ComplexTabsComponent} from './common/complex-tabs/complex-tabs.component';
import {AboutPageComponent} from './pages/public/about-page/about-page.component';
import {ReviewsListComponent} from './common/reviews-list/reviews-list.component';
import {CarouselComponent} from './common/carousel/carousel.component';
import {FeedbackFormComponent} from './forms/feedback-form/feedback-form.component';
import {TransferFormComponent} from './forms/transfer-form/transfer-form.component';
import {RegistrationModalComponent} from './modals/registration-modal/registration-modal.component';
import {RealtyLocationComponent} from './sections/realty-location/realty-location.component';
import {RealtyShareComponent} from './common/realty-share/realty-share.component';
import {ContactsPageComponent} from './pages/public/contacts-page/contacts-page.component';
import {PopularCitiesComponent} from './common/popular-cities/popular-cities.component';
import {RealtySearchFormComponent} from './forms/realty-search-form/realty-search-form.component';
import {UserProfilePageComponent} from './pages/cabinet/user-profile-page/user-profile-page.component';
import {PhotosOfTheComplexComponent} from './sections/photos-of-the-complex/photos-of-the-complex.component';
import {PasswordRecoveryFormComponent} from './forms/password-recovery-form/password-recovery-form.component';
import {CarRentalFormComponent} from './forms/car-rental-form/car-rental-form.component';
import {NearestComplexesComponent} from './sections/nearest-complexes/nearest-complexes.component';
import {WhoWeAreComponent} from './sections/who-we-are/who-we-are.component';
import {TrustPageComponent} from './pages/public/trust-page/trust-page.component';
import {PasswordChangeFormComponent} from './forms/password-change-form/password-change-form.component';
import {RealtyPageComponent} from './pages/public/realty-page/realty-page.component';
import {SimilarRealtyComponent} from './sections/similar-realty/similar-realty.component';
import {RealtyMainPropertiesComponent} from './sections/realty-main-properties/realty-main-properties.component';
import {RealtyRatingsComponent} from './sections/realty-ratings/realty-ratings.component';
import {RealtyEmployedByComponent} from './common/realty-employed-by/realty-employed-by.component';
import {DescriptionOfTheComplexComponent} from './sections/description-of-the-complex/description-of-the-complex.component';
import {SocialAuthorizationComponent} from './common/social-authorization/social-authorization.component';
import {UserBookingPageComponent} from './pages/cabinet/user-booking-page/user-booking-page.component';
import {ComplexOnTheMapComponent} from './sections/complex-on-the-map/complex-on-the-map.component';
import {IconComponent} from './common/icon/icon.component';
import {PropertiesComponent} from './common/properties/properties.component';
import {UserReviewsPageComponent} from './pages/cabinet/user-reviews-page/user-reviews-page.component';
import {HowItWorksComponent} from './sections/how-it-works/how-it-works.component';
import {BookingComponent} from './common/booking/booking.component';
import {UserTripsPageComponent} from './pages/cabinet/user-trips-page/user-trips-page.component';
import {ManagementPageComponent} from './pages/public/management-page/management-page.component';
import {FeedbackComponent} from './sections/feedback/feedback.component';
import {EscortPageComponent} from './pages/public/escort-page/escort-page.component';
import {ProfileFormComponent} from './forms/profile-form/profile-form.component';
import {ComplexPageComponent} from './pages/public/complex-page/complex-page.component';
import {RentingFormComponent} from './forms/renting-form/renting-form.component';
import {RegistrationFormComponent} from './forms/registration-form/registration-form.component';
import {ComplexComponent} from './common/complex/complex.component';
import {RealtyReviewsComponent} from './sections/realty-reviews/realty-reviews.component';
import {SubscriptionFormComponent} from './forms/subscription-form/subscription-form.component';
import {ArticlePageComponent} from './pages/public/article-page/article-page.component';
import {RealtyOwnerComponent} from './common/realty-owner/realty-owner.component';
import {PropertyComponent} from './common/property/property.component';
import {CitiesTabsComponent} from './common/cities-tabs/cities-tabs.component';
import {AddRealtyPageComponent} from './pages/cabinet/add-realty-page/add-realty-page.component';
import {LanguageChangeFormComponent} from './forms/language-change-form/language-change-form.component';
import {ViewOnMapComponent} from './common/view-on-map/view-on-map.component';
import {CleaningPageComponent} from './pages/public/cleaning-page/cleaning-page.component';
import {RealtyFacilitiesComponent} from './sections/realty-facilities/realty-facilities.component';
import {UserTransfersPageComponent} from './pages/cabinet/user-transfers-page/user-transfers-page.component';
import {ComplexesListComponent} from './common/complexes-list/complexes-list.component';
import {ProfileAvatarFormComponent} from './forms/profile-avatar-form/profile-avatar-form.component';
import {PasswordRecoveryModalComponent} from './modals/password-recovery-modal/password-recovery-modal.component';
import {RealtyFilterFormComponent} from './forms/realty-filter-form/realty-filter-form.component';
import {ReviewComponent} from './common/review/review.component';
import {SupportFormComponent} from './forms/support-form/support-form.component';
import {AuthorizationComponent} from './sections/authorization/authorization.component';
import {RealtyPropertiesComponent} from './sections/realty-properties/realty-properties.component';
import {Status404PageComponent} from './pages/public/status404-page/status404-page.component';
import {ToggleFavoriteComponent} from './common/toggle-favorite/toggle-favorite.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import {AppRoutingModule} from './/app-routing.module';

import {SafePipe} from './pipes/safe.pipe';

@NgModule({
  declarations: [
      AppComponent, AskForHelpComponent, BookingComponent, CabinetNavigationComponent, CitiesTabsComponent, ComplexComponent, ComplexTabsComponent, IconComponent, ComplexesListComponent, RealtyRatingsComponent, RealtyListComponent, RealtyEmployedByComponent, CarouselComponent, RealtyComponent, RealtyOwnerComponent, PageFooterComponent, PaginationComponent, PopularCitiesComponent, PreloaderComponent, ReviewComponent, RatingComponent, SocialAuthorizationComponent, AvatarComponent, AuthorizationFormComponent, BookingFormComponent, CarRentalFormComponent, LanguageChangeFormComponent, ProfileFormComponent, ProfileAvatarFormComponent, FeedbackFormComponent, PasswordRecoveryFormComponent, RegistrationFormComponent, RentingFormComponent, RealtySearchFormComponent, SubscriptionFormComponent, SupportFormComponent, PasswordRecoveryModalComponent, RegistrationModalComponent, UserBalancePageComponent, UserBookingPageComponent, UserPartnershipPageComponent, UserRealtyPageComponent, UserReviewsPageComponent, UserTransfersPageComponent, ArticlePageComponent, AuthorizationPageComponent, CarRentalPageComponent, CommissionPageComponent, ComplexPageComponent, ContactsPageComponent, FavoritesPageComponent, ManagementPageComponent, SearchPageComponent, SupportPageComponent, TransferPageComponent, WithdrawPageComponent, AboutTheComplexComponent, ApartmentsInTheComplexComponent, AuthorizationComponent, CharacteristicsOfTheComplexComponent, ComplexRealtyComponent, DescriptionOfTheComplexComponent, FeedbackComponent, HowItWorksComponent, LatestRealtyComponent, MostPopularCitiesComponent, RealtyFacilitiesComponent, RealtyLocationComponent, RealtyMainPropertiesComponent, RealtyPricesComponent, RealtyReviewsComponent, RealtyDescriptionComponent, PhotosOfTheComplexComponent, ServicesComponent, SimilarRealtyComponent, WhoWeAreComponent, RealtyInterestedInComponent, PageHeaderComponent, ViewOnMapComponent, PasswordChangeFormComponent, TransferFormComponent, RealtyFilterFormComponent, ServiceSettingsFormComponent, AuthorizationModalComponent, UserBookingsPageComponent, UserProfilePageComponent, UserReferralBookingsPageComponent, UserTripsPageComponent, AboutPageComponent, CleaningPageComponent, RealtyPageComponent, TrustPageComponent, BestRealtyOfTheWeekComponent, ComplexOnTheMapComponent, GuaranteesComponent, LatestReviewsComponent, OurServicesComponent, PropertyComponent, ReviewsCarouselComponent, BookingsFilterFormComponent, AddRealtyPageComponent, IndexPageComponent, NearestComplexesComponent, PropertiesComponent, ReviewsListComponent, RealtyShareComponent, EscortPageComponent, PropertiesComponent, ToggleFavoriteComponent, SafePipe, RealtyPropertiesComponent, Status404PageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgZorroAntdModule,
    SwiperModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyC7pOhu1cO-w45MQgUQ9Sv6XNWEbsaY7GM'
    })

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //     InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
