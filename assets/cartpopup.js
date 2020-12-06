define([
	'jquery',
	'Magento_Ui/js/modal/modal'
], function ($, modal) {
	'use strict';
	
	$( document ).ready(function() {
		//successBox
		var successBoxOptions = {
			'type': 'popup',
			'title': 'Thank You',
			'modalClass': 'success_box_modal',
			'responsive': true,
			'innerScroll': true,
			'buttons': [{
				text: $.mage.__('Back'),
				class: 'success_box_back_btn',
				click: function () {
					this.closeModal();
				}
			}]
		};
		var successBoxPopup = modal(successBoxOptions, $('#successBox'));
		
		//errorBox
		var errorBoxOptions = {
			'type': 'popup',
			'title': 'Error!',
			'modalClass': 'error_box_modal',
			'responsive': true,
			'innerScroll': true,
			'buttons': [{
				text: $.mage.__('Back'),
				class: 'error_box_back_btn',
				click: function () {
					this.closeModal();
				}
			}]
		};
		var errorBoxPopup = modal(errorBoxOptions, $('#errorBox'));
		
		//addedBox
		var addedBoxOptions = {
			'type': 'popup',
			'title': 'Added!',
			'modalClass': 'added_box_modal',
			'responsive': true,
			'innerScroll': true,
			'buttons': [{
				text: $.mage.__('Back'),
				class: 'added_box_back_btn',
				click: function () {
					this.closeModal();
				}
			}]
		};
		
		var addedBoxPopup = modal(addedBoxOptions, $('#addedBox'));
		
		// close modal on click of continue shopping button
		$('#addedBox').on('click', '.continueShopping', function() {
			$('#addedBox').modal("closeModal");
		});
		
		//redirect to cart page on click of cart button
		$('#addedBox').on('click', '.gotoShoppingCart', function() { 
			$('.loading-mask').show();
		});

		//redirect to login or checkout page on click of checkout button
		$('#addedBox').on('click', '.gotoCheckout', function() { 
			$('.loading-mask').show();
		});

		// Returns full URL
		var redirectUrl = location.href.replace(location.hash,"");

		// refresh page on close of addedBox
		$('.checkout-cart-index .added_box_modal .action-close').on('click', function() {
			window.location.href = redirectUrl;
		});

		// refresh page on click of continue shopping button of addedBox
		$('.checkout-cart-index .added_box_modal .closeCartModal').on('click', function() {
			window.location.href = redirectUrl;
		});
	});
});
