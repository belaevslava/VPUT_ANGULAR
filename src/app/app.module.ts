import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { AppComponent } from './app.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};

import {RealtyDescriptionComponent} from './sections/realty-description/realty-description.component';
import {FormAuthorizationComponent} from './forms/form-authorization/form-authorization.component';
import {AskForHelpComponent} from './common/ask-for-help/ask-for-help.component';
import {ApartmentsInTheComplexComponent} from './sections/apartments-in-the-complex/apartments-in-the-complex.component';
import {PaginationComponent} from './common/pagination/pagination.component';
import {PagePartnershipComponent} from './pages/cabinet/page-partnership/page-partnership.component';
import {LatestRealtyComponent} from './sections/latest-realty/latest-realty.component';
import {FormServiceSettingsComponent} from './forms/form-service-settings/form-service-settings.component';
import {PageFavoritesComponent} from './pages/site/page-favorites/page-favorites.component';
import {GuaranteesComponent} from './sections/guarantees/guarantees.component';
import {PageReferralBookingsComponent} from './pages/cabinet/page-referral-bookings/page-referral-bookings.component';
import {MostPopularCitiesComponent} from './sections/most-popular-cities/most-popular-cities.component';
import {BestRealtyOfTheWeekComponent} from './sections/best-realty-of-the-week/best-realty-of-the-week.component';
import {PageFooterComponent} from './common/page-footer/page-footer.component';
import {RealtyInterestedInComponent} from './common/realty-interested-in/realty-interested-in.component';
import {PageCommissionComponent} from './pages/site/page-commission/page-commission.component';
import {LatestReviewsComponent} from './sections/latest-reviews/latest-reviews.component';
import {ModalAuthorizationComponent} from './modals/modal-authorization/modal-authorization.component';
import {RatingComponent} from './common/rating/rating.component';
import {RealtyPricesComponent} from './sections/realty-prices/realty-prices.component';
import {FormBookingComponent} from './forms/form-booking/form-booking.component';
import {PageIndexComponent} from './pages/site/page-index/page-index.component';
import {PageRealtiesComponent} from './pages/cabinet/page-realties/page-realties.component';
import {FormBookingsFilterComponent} from './forms/form-bookings-filter/form-bookings-filter.component';
import {PageBookingsComponent} from './pages/cabinet/page-bookings/page-bookings.component';
import {ServicesComponent} from './sections/services/services.component';
import {PageBalanceComponent} from './pages/cabinet/page-balance/page-balance.component';
import {PreloaderComponent} from './common/preloader/preloader.component';
import {PageAuthorizationComponent} from './pages/site/page-authorization/page-authorization.component';
import {RealtyOnTheMapComponent} from './common/realty-on-the-map/realty-on-the-map.component';
import {ComplexRealtyComponent} from './sections/complex-realty/complex-realty.component';
import {CabinetNavigationComponent} from './common/cabinet-navigation/cabinet-navigation.component';
import {CharacteristicsOfTheComplexComponent} from './sections/characteristics-of-the-complex/characteristics-of-the-complex.component';
import {AboutTheComplexComponent} from './sections/about-the-complex/about-the-complex.component';
import {PageTransferComponent} from './pages/site/page-transfer/page-transfer.component';
import {PageWithdrawComponent} from './pages/site/page-withdraw/page-withdraw.component';
import {PageSupportComponent} from './pages/site/page-support/page-support.component';
import {PageSearchComponent} from './pages/site/page-search/page-search.component';
import {ReviewsCarouselComponent} from './common/reviews-carousel/reviews-carousel.component';
import {PageHeaderComponent} from './common/page-header/page-header.component';
import {ListOfRealtyComponent} from './common/list-of-realty/list-of-realty.component';
import {PageCarRentalComponent} from './pages/site/page-car-rental/page-car-rental.component';
import {AvatarComponent} from './common/avatar/avatar.component';
import {RealtyItemComponent} from './common/realty-item/realty-item.component';
import {OurServicesComponent} from './sections/our-services/our-services.component';
import {ComplexTabsComponent} from './common/complex-tabs/complex-tabs.component';
import {PageAboutComponent} from './pages/site/page-about/page-about.component';
import {ReviewsComponent} from './common/reviews/reviews.component';
import {CarouselComponent} from './common/carousel/carousel.component';
import {FormFeedbackComponent} from './forms/form-feedback/form-feedback.component';
import {FormEditTransferComponent} from './forms/form-edit-transfer/form-edit-transfer.component';
import {ModalRegistrationComponent} from './modals/modal-registration/modal-registration.component';
import {RealtyLocationComponent} from './sections/realty-location/realty-location.component';
import {RealtyShareComponent} from './common/realty-share/realty-share.component';
import {PageContactsComponent} from './pages/site/page-contacts/page-contacts.component';
import {PopularCitiesComponent} from './common/popular-cities/popular-cities.component';
import {FormSearchRealtyComponent} from './forms/form-search-realty/form-search-realty.component';
import {PageProfileComponent} from './pages/cabinet/page-profile/page-profile.component';
import {PhotosOfTheComplexComponent} from './sections/photos-of-the-complex/photos-of-the-complex.component';
import {FormRecoveryComponent} from './forms/form-recovery/form-recovery.component';
import {FormCarRentalComponent} from './forms/form-car-rental/form-car-rental.component';
import {NearestComplexesComponent} from './sections/nearest-complexes/nearest-complexes.component';
import {WhoWeAreComponent} from './sections/who-we-are/who-we-are.component';
import {PageTrustComponent} from './pages/site/page-trust/page-trust.component';
import {FormChangePasswordComponent} from './forms/form-change-password/form-change-password.component';
import {PageRealtyComponent} from './pages/site/page-realty/page-realty.component';
import {SimilarRealtyComponent} from './sections/similar-realty/similar-realty.component';
import {RealtyMainPropertiesComponent} from './sections/realty-main-properties/realty-main-properties.component';
import {RealtyRatingsComponent} from './sections/realty-ratings/realty-ratings.component';
import {RealtyEmployedByComponent} from './common/realty-employed-by/realty-employed-by.component';
import {DescriptionOfTheComplexComponent} from './sections/description-of-the-complex/description-of-the-complex.component';
import {SocialAuthorizationComponent} from './common/social-authorization/social-authorization.component';
import {PageBookingComponent} from './pages/cabinet/page-booking/page-booking.component';
import {ComplexOnTheMapComponent} from './sections/complex-on-the-map/complex-on-the-map.component';
import {IconComponent} from './common/icon/icon.component';
import {PropertiesComponent} from './common/properties/properties.component';
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
import {RealtyReviewsComponent} from './sections/realty-reviews/realty-reviews.component';
import {FormSubscribeComponent} from './forms/form-subscribe/form-subscribe.component';
import {PageArticleComponent} from './pages/site/page-article/page-article.component';
import {RealtyOwnerComponent} from './common/realty-owner/realty-owner.component';
import {PropertyComponent} from './common/property/property.component';
import {CitiesTabsComponent} from './common/cities-tabs/cities-tabs.component';
import {PageAddComponent} from './pages/cabinet/page-add/page-add.component';
import {FormChangeLanguagesComponent} from './forms/form-change-languages/form-change-languages.component';
import {ViewOnMapComponent} from './common/view-on-map/view-on-map.component';
import {PageCleaningComponent} from './pages/site/page-cleaning/page-cleaning.component';
import {RealtyFacilitiesComponent} from './sections/realty-facilities/realty-facilities.component';
import {PageTransfersComponent} from './pages/cabinet/page-transfers/page-transfers.component';
import {ListOfComplexesComponent} from './common/list-of-complexes/list-of-complexes.component';
import {FormChangeProfilePictureComponent} from './forms/form-change-profile-picture/form-change-profile-picture.component';
import {ModalPasswordRecoveryComponent} from './modals/modal-password-recovery/modal-password-recovery.component';
import {FormRealtyFilterComponent} from './forms/form-realty-filter/form-realty-filter.component';
import {ReviewComponent} from './common/review/review.component';
import {FormSupportComponent} from './forms/form-support/form-support.component';
import {AuthorizationComponent} from './sections/authorization/authorization.component';
import {RealtyPropertiesComponent} from './sections/realty-properties/realty-properties.component';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './/app-routing.module';
import { ToggleFavoriteComponent } from './common/toggle-favorite/toggle-favorite.component';

import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
      AppComponent, AskForHelpComponent, BookingItemComponent, CabinetNavigationComponent, CitiesTabsComponent, ComplexItemComponent, ComplexTabsComponent, IconComponent, ListOfComplexesComponent, RealtyRatingsComponent, ListOfRealtyComponent, RealtyEmployedByComponent, CarouselComponent, RealtyItemComponent, RealtyOwnerComponent, RealtyOnTheMapComponent, PageFooterComponent, PaginationComponent, PopularCitiesComponent, PreloaderComponent, ReviewComponent, RatingComponent, SocialAuthorizationComponent, AvatarComponent, FormAuthorizationComponent, FormBookingComponent, FormCarRentalComponent, FormChangeLanguagesComponent, FormChangePersonalDataComponent, FormChangeProfilePictureComponent, FormFeedbackComponent, FormRecoveryComponent, FormRegistrationComponent, FormRentingComponent, FormSearchRealtyComponent, FormSubscribeComponent, FormSupportComponent, ModalPasswordRecoveryComponent, ModalRegistrationComponent, PageBalanceComponent, PageBookingComponent, PagePartnershipComponent, PageRealtiesComponent, PageReviewsComponent, PageTransfersComponent, PageArticleComponent, PageAuthorizationComponent, PageCarRentalComponent, PageCommissionComponent, PageComplexComponent, PageContactsComponent, PageFavoritesComponent, PageManagementComponent, PageSearchComponent, PageSupportComponent, PageTransferComponent, PageWithdrawComponent, AboutTheComplexComponent, ApartmentsInTheComplexComponent, AuthorizationComponent, CharacteristicsOfTheComplexComponent, ComplexRealtyComponent, DescriptionOfTheComplexComponent, FeedbackComponent, HowItWorksComponent, LatestRealtyComponent, MostPopularCitiesComponent, RealtyFacilitiesComponent, RealtyLocationComponent, RealtyMainPropertiesComponent, RealtyPricesComponent, RealtyReviewsComponent, RealtyDescriptionComponent, PhotosOfTheComplexComponent, ServicesComponent, SimilarRealtyComponent, WhoWeAreComponent, RealtyInterestedInComponent, PageHeaderComponent, ViewOnMapComponent, FormChangePasswordComponent, FormEditTransferComponent, FormRealtyFilterComponent, FormServiceSettingsComponent, ModalAuthorizationComponent, PageBookingsComponent, PageProfileComponent, PageReferralBookingsComponent, PageTripsComponent, PageAboutComponent, PageCleaningComponent, PageRealtyComponent, PageTrustComponent, BestRealtyOfTheWeekComponent, ComplexOnTheMapComponent, GuaranteesComponent, LatestReviewsComponent, OurServicesComponent, PropertyComponent, ReviewsCarouselComponent, FormBookingsFilterComponent, PageAddComponent, PageIndexComponent, NearestComplexesComponent, PropertiesComponent, ReviewsComponent, RealtyShareComponent, PageEscortComponent, PropertiesComponent, ToggleFavoriteComponent, SafePipe, RealtyPropertiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    SwiperModule

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
