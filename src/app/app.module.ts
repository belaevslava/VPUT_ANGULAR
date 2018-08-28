import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {OfferShortDescriptionComponent} from './sections/offer-short-description/offer-short-description.component';
import {OfferBedroomsComponent} from './sections/offer-bedrooms/offer-bedrooms.component';
import {FormAuthorizationComponent} from './forms/form-authorization/form-authorization.component';
import {OfferPlacesNearbyComponent} from './sections/offer-places-nearby/offer-places-nearby.component';
import {AskForHelpComponent} from './common/ask-for-help/ask-for-help.component';
import {ApartmentsInTheComplexComponent} from './sections/apartments-in-the-complex/apartments-in-the-complex.component';
import {OfferItemCarouselComponent} from './common/offer-item-carousel/offer-item-carousel.component';
import {PaginationComponent} from './common/pagination/pagination.component';
import {PagePartnershipComponent} from './pages/cabinet/page-partnership/page-partnership.component';
import {LatestOffersComponent} from './sections/latest-offers/latest-offers.component';
import {FormServiceSettingsComponent} from './forms/form-service-settings/form-service-settings.component';
import {PageFavoritesComponent} from './pages/site/page-favorites/page-favorites.component';
import {GuaranteesComponent} from './sections/guarantees/guarantees.component';
import {PageReferralBookingsComponent} from './pages/cabinet/page-referral-bookings/page-referral-bookings.component';
import {MostPopularCitiesComponent} from './sections/most-popular-cities/most-popular-cities.component';
import {BestOffersOfTheWeekComponent} from './sections/best-offers-of-the-week/best-offers-of-the-week.component';
import {PageFooterComponent} from './common/page-footer/page-footer.component';
import {OfferInterestedInComponent} from './common/offer-interested-in/offer-interested-in.component';
import {PageCommissionComponent} from './pages/site/page-commission/page-commission.component';
import {LatestReviewsComponent} from './sections/latest-reviews/latest-reviews.component';
import {ModalAuthorizationComponent} from './modals/modal-authorization/modal-authorization.component';
import {ReviewRatingComponent} from './common/review-rating/review-rating.component';
import {OfferPricesForThePeriodComponent} from './sections/offer-prices-for-the-period/offer-prices-for-the-period.component';
import {FormBookingComponent} from './forms/form-booking/form-booking.component';
import {PageIndexComponent} from './pages/site/page-index/page-index.component';
import {PageRealtiesComponent} from './pages/cabinet/page-realties/page-realties.component';
import {FormBookingsFilterComponent} from './forms/form-bookings-filter/form-bookings-filter.component';
import {PageBookingsComponent} from './pages/cabinet/page-bookings/page-bookings.component';
import {ServicesComponent} from './sections/services/services.component';
import {PageBalanceComponent} from './pages/cabinet/page-balance/page-balance.component';
import {PreloaderComponent} from './common/preloader/preloader.component';
import {PageAuthorizationComponent} from './pages/site/page-authorization/page-authorization.component';
import {OffersOnTheMapComponent} from './common/offers-on-the-map/offers-on-the-map.component';
import {ComplexOffersComponent} from './sections/complex-offers/complex-offers.component';
import {CabinetNavigationComponent} from './common/cabinet-navigation/cabinet-navigation.component';
import {CharacteristicsOfTheComplexComponent} from './sections/characteristics-of-the-complex/characteristics-of-the-complex.component';
import {AboutTheComplexComponent} from './sections/about-the-complex/about-the-complex.component';
import {PageTransferComponent} from './pages/site/page-transfer/page-transfer.component';
import {PageWithdrawComponent} from './pages/site/page-withdraw/page-withdraw.component';
import {OfferCharacteristicsComponent} from './sections/offer-characteristics/offer-characteristics.component';
import {PageSupportComponent} from './pages/site/page-support/page-support.component';
import {PageSearchComponent} from './pages/site/page-search/page-search.component';
import {ReviewsSliderComponent} from './common/reviews-slider/reviews-slider.component';
import {PageHeaderComponent} from './common/page-header/page-header.component';
import {ListOfOffersComponent} from './common/list-of-offers/list-of-offers.component';
import {PageCarRentalComponent} from './pages/site/page-car-rental/page-car-rental.component';
import {UserAvatarComponent} from './common/user-avatar/user-avatar.component';
import {OfferItemComponent} from './common/offer-item/offer-item.component';
import {OurServicesComponent} from './sections/our-services/our-services.component';
import {ComplexTabsComponent} from './common/complex-tabs/complex-tabs.component';
import {PageAboutComponent} from './pages/site/page-about/page-about.component';
import {ListOfReviewsComponent} from './common/list-of-reviews/list-of-reviews.component';
import {OfferImageSliderComponent} from './common/offer-image-slider/offer-image-slider.component';
import {FormFeedbackComponent} from './forms/form-feedback/form-feedback.component';
import {FormEditTransferComponent} from './forms/form-edit-transfer/form-edit-transfer.component';
import {ModalRegistrationComponent} from './modals/modal-registration/modal-registration.component';
import {OfferLocationComponent} from './sections/offer-location/offer-location.component';
import {OfferShareComponent} from './common/offer-share/offer-share.component';
import {PageContactsComponent} from './pages/site/page-contacts/page-contacts.component';
import {PopularCitiesComponent} from './common/popular-cities/popular-cities.component';
import {OfferRulesOfResidenceComponent} from './sections/offer-rules-of-residence/offer-rules-of-residence.component';
import {FormSearchOffersComponent} from './forms/form-search-offers/form-search-offers.component';
import {PageProfileComponent} from './pages/cabinet/page-profile/page-profile.component';
import {PhotosOfTheComplexComponent} from './sections/photos-of-the-complex/photos-of-the-complex.component';
import {FormRecoveryComponent} from './forms/form-recovery/form-recovery.component';
import {FormCarRentalComponent} from './forms/form-car-rental/form-car-rental.component';
import {NearestComplexesComponent} from './sections/nearest-complexes/nearest-complexes.component';
import {AnimatedHeartComponent} from './common/animated-heart/animated-heart.component';
import {WhoWeAreComponent} from './sections/who-we-are/who-we-are.component';
import {PageTrustComponent} from './pages/site/page-trust/page-trust.component';
import {FormChangePasswordComponent} from './forms/form-change-password/form-change-password.component';
import {PageOfferComponent} from './pages/site/page-offer/page-offer.component';
import {SimilarOffersComponent} from './sections/similar-offers/similar-offers.component';
import {OfferMainCharacteristicsComponent} from './sections/offer-main-characteristics/offer-main-characteristics.component';
import {ListOfOfferRatingsComponent} from './common/list-of-offer-ratings/list-of-offer-ratings.component';
import {OfferEmployedByComponent} from './common/offer-employed-by/offer-employed-by.component';
import {DescriptionOfTheComplexComponent} from './sections/description-of-the-complex/description-of-the-complex.component';
import {SocialAuthorizationComponent} from './common/social-authorization/social-authorization.component';
import {PageBookingComponent} from './pages/cabinet/page-booking/page-booking.component';
import {ComplexOnTheMapComponent} from './sections/complex-on-the-map/complex-on-the-map.component';
import {IconComponent} from './common/icon/icon.component';
import {ListOfOfferCharacteristicsComponent} from './common/list-of-offer-characteristics/list-of-offer-characteristics.component';
import {PageReviewsComponent} from './pages/cabinet/page-reviews/page-reviews.component';
import {HowItWorksComponent} from './sections/how-it-works/how-it-works.component';
import {BookingItemComponent} from './common/booking-item/booking-item.component';
import {PageTripsComponent} from './pages/cabinet/page-trips/page-trips.component';
import {PageManagementComponent} from './pages/site/page-management/page-management.component';
import {FeedbackComponent} from './sections/feedback/feedback.component';
import {PageEscortComponent} from './pages/site/page-escort/page-escort.component';
import {FormChangePersonalDataComponent} from './forms/form-change-personal-data/form-change-personal-data.component';
import {PageComplexComponent} from './pages/site/page-complex/page-complex.component';
import {FormRentingComponent} from './forms/form-renting/form-renting.component';
import {FormRegistrationComponent} from './forms/form-registration/form-registration.component';
import {ComplexItemComponent} from './common/complex-item/complex-item.component';
import {OfferReviewsComponent} from './sections/offer-reviews/offer-reviews.component';
import {FormSubscribeComponent} from './forms/form-subscribe/form-subscribe.component';
import {PageArticleComponent} from './pages/site/page-article/page-article.component';
import {OfferOwnerComponent} from './common/offer-owner/offer-owner.component';
import {OfferCharacteristicComponent} from './common/offer-characteristic/offer-characteristic.component';
import {CitiesTabsComponent} from './common/cities-tabs/cities-tabs.component';
import {PageAddComponent} from './pages/cabinet/page-add/page-add.component';
import {FormChangeLanguagesComponent} from './forms/form-change-languages/form-change-languages.component';
import {ViewOnMapComponent} from './common/view-on-map/view-on-map.component';
import {PageCleaningComponent} from './pages/site/page-cleaning/page-cleaning.component';
import {OfferFacilitiesComponent} from './sections/offer-facilities/offer-facilities.component';
import {PageTransfersComponent} from './pages/cabinet/page-transfers/page-transfers.component';
import {ListOfComplexesComponent} from './common/list-of-complexes/list-of-complexes.component';
import {FormChangeProfilePictureComponent} from './forms/form-change-profile-picture/form-change-profile-picture.component';
import {ModalPasswordRecoveryComponent} from './modals/modal-password-recovery/modal-password-recovery.component';
import {FormRealtiesFilterComponent} from './forms/form-realties-filter/form-realties-filter.component';
import {ReviewComponent} from './common/review/review.component';
import {FormSupportComponent} from './forms/form-support/form-support.component';
import {AuthorizationComponent} from './sections/authorization/authorization.component';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
      AppComponent, AnimatedHeartComponent, AskForHelpComponent, BookingItemComponent, CabinetNavigationComponent, CitiesTabsComponent, ComplexItemComponent, ComplexTabsComponent, IconComponent, ListOfComplexesComponent, ListOfOfferRatingsComponent, ListOfOffersComponent, OfferEmployedByComponent, OfferImageSliderComponent, OfferItemComponent, OfferOwnerComponent, OffersOnTheMapComponent, PageFooterComponent, PaginationComponent, PopularCitiesComponent, PreloaderComponent, ReviewComponent, ReviewRatingComponent, SocialAuthorizationComponent, UserAvatarComponent, FormAuthorizationComponent, FormBookingComponent, FormCarRentalComponent, FormChangeLanguagesComponent, FormChangePersonalDataComponent, FormChangeProfilePictureComponent, FormFeedbackComponent, FormRecoveryComponent, FormRegistrationComponent, FormRentingComponent, FormSearchOffersComponent, FormSubscribeComponent, FormSupportComponent, ModalPasswordRecoveryComponent, ModalRegistrationComponent, PageBalanceComponent, PageBookingComponent, PagePartnershipComponent, PageRealtiesComponent, PageReviewsComponent, PageTransfersComponent, PageArticleComponent, PageAuthorizationComponent, PageCarRentalComponent, PageCommissionComponent, PageComplexComponent, PageContactsComponent, PageFavoritesComponent, PageManagementComponent, PageSearchComponent, PageSupportComponent, PageTransferComponent, PageWithdrawComponent, AboutTheComplexComponent, ApartmentsInTheComplexComponent, AuthorizationComponent, CharacteristicsOfTheComplexComponent, ComplexOffersComponent, DescriptionOfTheComplexComponent, FeedbackComponent, HowItWorksComponent, LatestOffersComponent, MostPopularCitiesComponent, OfferBedroomsComponent, OfferFacilitiesComponent, OfferLocationComponent, OfferMainCharacteristicsComponent, OfferPricesForThePeriodComponent, OfferReviewsComponent, OfferShortDescriptionComponent, PhotosOfTheComplexComponent, ServicesComponent, SimilarOffersComponent, WhoWeAreComponent, OfferInterestedInComponent, OfferItemCarouselComponent, PageHeaderComponent, ViewOnMapComponent, FormChangePasswordComponent, FormEditTransferComponent, FormRealtiesFilterComponent, FormServiceSettingsComponent, ModalAuthorizationComponent, PageBookingsComponent, PageProfileComponent, PageReferralBookingsComponent, PageTripsComponent, PageAboutComponent, PageCleaningComponent, PageOfferComponent, PageTrustComponent, BestOffersOfTheWeekComponent, ComplexOnTheMapComponent, GuaranteesComponent, LatestReviewsComponent, OfferPlacesNearbyComponent, OfferRulesOfResidenceComponent, OurServicesComponent, OfferCharacteristicComponent, ReviewsSliderComponent, FormBookingsFilterComponent, PageAddComponent, PageIndexComponent, NearestComplexesComponent, ListOfOfferCharacteristicsComponent, ListOfReviewsComponent, OfferShareComponent, PageEscortComponent, OfferCharacteristicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
