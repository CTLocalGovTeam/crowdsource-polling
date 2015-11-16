﻿/*global define */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define(
     ({
        map: {  // Map, feature layer, and comments table loading and checking
            error: "Žemėlapio sukurti nepavyko",
            layerLoad: "Nepavyko įkelti viso žemėlapio",
            missingItemsFeatureLayer: "Sukonfigūruokite aplikaciją, kad galėtumėte naudoti elementų sluoksnį"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Rodyti meniu",
            signInButton: "Prisijungti",
            signInButtonTooltip: "Prisijunkite",
            signOutButton: "Atsijungti",
            signOutButtonTooltip: "Atsijunkite",
            helpButtonLabel: "Pagalba",
            helpButtonTooltip: "Sužinokite daugiau",
            gotoListViewLabel: "Sąrašo vaizdas",
            gotoListViewTooltip: "Pereiti į sąrašo vaizdą", // Go to List view tooltip text
            gotoMapViewLabel: "Žemėlapio vaizdas",
            gotoMapViewTooltip: "Eiti į žemėlapio vaizdą" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Užverti"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Prisijungti naudojant Facebook",
            signIntoGooglePlusTooltip: "Prisijungti naudojant Google+",
            signIntoTwitterTooltip: "Prisijungti naudojant Twitter",
            signOutOfFacebookTooltip: "Atsijungti nuo Facebook",
            signOutOfGooglePlusTooltip: "Atsijungti nuo Google+",
            signOutOfTwitterTooltip: "Atsijungti nuo Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (neprivaloma)",
            requiredFormItemFlag: " (privaloma)",
            unsettableRequiredField: "Būtinas laukas neinicijuotas ir jo nėra formoje",
            countOfRemainingCharactersTooltip: "Liko ženklų",
            cancelButtonLabel: "Atšaukti",
            submitButtonLabel: "Pateikti"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Balsuokite už šį elementą",
            commentButtonTooltip: "Pridėti komentarą",
            gotoMapViewTooltip: "Eiti į žemėlapio vaizdą",
            galleryButtonTooltip: "Rodyti pridėtus failus",
            commentsListHeading: "Komentarai",
            noCommentsPlaceholder: "Komentarų nėra"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filtrų sąrašas pagal žemėlapį",
            linkToMapViewOptionTooltip: "Pateikti elementus, nematomus šiame žemėlapyje",
            likesForThisItemTooltip: "Balsai už šį elementą"
        }
    })
);
